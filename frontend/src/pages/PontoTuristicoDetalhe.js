import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 
import Comentarios from '../components/comentarios';

import $ from 'jquery';


import  '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/slick-carousel/slick/slick.js';

function PontoTuristicoDetalhe(props) {
  const [pontoTuristico, setPontoTuristico] = useState(null);
  const slickRef = useRef(null);
  

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/api/pontos_turisticos/${props.match.params.id}`)
      .then((response) => {
        setPontoTuristico(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    if (slickRef.current && pontoTuristico) {
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
  }, [slickRef, pontoTuristico]);

  if (!pontoTuristico) {
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
            <img src={pontoTuristico.url_imagem_1} alt={pontoTuristico.nome} />
          </div>
          <div>
            <img src={pontoTuristico.url_imagem_2} alt={pontoTuristico.nome} />
          </div>
        </div>
        <p> <i className="fas fa-phone">  </i> { pontoTuristico.telefone}</p>
<p>
  <i className="fas fa-envelope"></i>
   {pontoTuristico.email}
</p>
<p>
  <i className="fas fa-map-marker-alt"></i>
  {pontoTuristico.endereco}
</p>
<p>
  <i className="fas fa-clock"></i>  
  Horário de funcionamento: {pontoTuristico.horario_funcionamento}
</p>

      </div>

      <div id="map"></div>
      <div className="info">
        <h1>{pontoTuristico.nome}</h1>
        <p>{pontoTuristico.descricao}</p>
        <div className="comentario">
          <Comentarios />
        </div>
      </div>
    </div>
  );
}

export default PontoTuristicoDetalhe;