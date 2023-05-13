import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 
import Comentarios from '../components/comentarios';

import $ from 'jquery';


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
        <p>Telefone: {restaurante.telefone}</p>
        <p>Email: {restaurante.email}</p>
        <p>Endereço: {restaurante.endereco}</p>
        <p>Website: {restaurante.website}</p>
        <p>Horario de funcionamento: {restaurante.horario_funcionamento}</p>
      </div>
      <div className="info">
        <h1>{restaurante.nome}</h1>
        <p>{restaurante.descricao}</p>
        <div className="comentario">
      <Comentarios/>
      </div>
      </div>
    </div>
  );
}

export default RestauranteDetalhe;
