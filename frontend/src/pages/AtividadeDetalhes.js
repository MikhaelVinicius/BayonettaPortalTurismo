import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 
import Comentarios from '../components/comentarios';

import $ from 'jquery';


import  '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/slick-carousel/slick/slick.js';
function AtividadeDetalhes(props) {
  const [atividade, setAtividade] = useState(null);
  const slickRef = useRef(null);
  

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/atividades/${props.match.params.id}`).then(response => {
        setAtividade(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    if (slickRef.current && atividade) {
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
  }, [slickRef, atividade]);

  if (!atividade) {
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
            <img src={atividade.url_imagem_1} alt={atividade.nome} />
          </div>
          <div>
            <img src={atividade.url_imagem_2} alt={atividade.nome} />
          </div>
        </div>
        <p>Telefone: {atividade.telefone}</p>
        <p>Email: {atividade.email}</p>
        <p>Endereço: {atividade.endereco}</p>
        <p>Horario de funcionamento: {atividade.horario_funcionamento}</p>
      </div>
      <div className="info">
        <h1>{atividade.nome}</h1>
        <p>{atividade.descricao}</p>
        <div className="comentario">
      <Comentarios/>
      </div>
      </div>
    </div>
  );
}

export default AtividadeDetalhes;
