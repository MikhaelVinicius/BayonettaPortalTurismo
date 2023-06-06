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

function EventoDetalhe(props) {
  const [eventos, setEventos] = useState(null);
  const slickRef = useRef(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/eventos/${props.match.params.id}`).then(response => {
        setEventos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    if (slickRef.current && eventos) {
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
  }, [slickRef, eventos]);

  if (!eventos) {
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
            <img src={eventos.imagem1} alt={eventos.nome} />
          </div>
          <div>
            <img src={eventos.imagem2} alt={eventos.nome} />
          </div>
        </div>
        <p>
  <i className="fas fa-phone"></i>
  Telefone: {eventos.telefone}
</p>
<p>
  <i className="fas fa-globe"></i>
  Website: {eventos.website}
</p>
<p>
  <i className="fas fa-envelope"></i>
  Email: {eventos.email}
</p>
<p>
  <i className="fas fa-map-marker-alt"></i>
  Endereço: {eventos.endereco}
</p>
<p>
  <i className="far fa-clock"></i>
  Horário de abertura: {eventos.horario_abertura}
</p>
<p>
  <i className="far fa-clock"></i>
  Horário de fechamento: {eventos.horario_fechamento}
</p>

<Maps address = {eventos.endereco}/>

      </div>
      <div className="info">
        <h1>{eventos.nome}</h1>
        <p>{eventos.descricao}</p>
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

export default EventoDetalhe;
