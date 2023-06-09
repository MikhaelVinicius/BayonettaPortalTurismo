import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 
import Comentarios from '../components/comentarios';
import Footer from '../components/footer';
import Maps from '../components/Maps';
import $ from 'jquery';
import Parceiros from '../components/Parceiros';

import  '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/slick-carousel/slick/slick.js';


function RestauranteDetalhe(props) {
  const [restaurante, setRestaurante] = useState(null);
  const slickRef = useRef(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/restaurantes/${props.match.params.id}`).then(response => {
        setRestaurante(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    if (slickRef.current && restaurante) {
      const initSlick = () => {
        $(".slider").not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      };

      setTimeout(initSlick, 100);
    }
  }, [slickRef, restaurante]);

  if (!restaurante) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
    <div className="detalhes">
      <header>
        <Nav /> 
      </header>
      <div className="imagem">
      <div className="slider" ref={slickRef}>
          <div>
            <img src={restaurante.imagem1} alt={restaurante.nome} />
          </div>
          <div>
            <img src={restaurante.imagem2} alt={restaurante.nome} />
          </div>
        </div>
        <p>
  <i className="fas fa-phone"></i>
  Telefone: {restaurante.telefone}
</p>
<p>
  <i className="fas fa-envelope"></i>
  Email: {restaurante.email}
</p>
<p>
  <i className="fas fa-map-marker-alt"></i>
  Endereço: {restaurante.endereco}
</p>
<p>
  <i className="fas fa-globe"></i>
  Website: {restaurante.website}
</p>
<p>
  <i className="fas fa-clock"></i>
  Horário de funcionamento: {restaurante.horario_funcionamento}
</p>
<Maps address = {restaurante.endereco}/>

      </div>
      <div className="info">
        <h1>{restaurante.nome}</h1>
        <p>{restaurante.descricao}</p>
        <div className="comentario">
      <Comentarios/>
      </div>
      </div>
    </div>
    <Parceiros/>
    <Footer/>
    </div>
  );
}

export default RestauranteDetalhe;
