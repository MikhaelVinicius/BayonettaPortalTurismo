import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 
import Comentarios from '../components/comentarios';
import $ from 'jquery';

import  '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/slick-carousel/slick/slick.js';

function HospedagemDetalhes(props) {
  const [hospedagem, setHospedagem] = useState(null);
   const slickRef = useRef(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/hospedagens/${props.match.params.id}`).then(response => {
        setHospedagem(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

    useEffect(() => {
    if (slickRef.current && hospedagem) {
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
  }, [slickRef, hospedagem]);

  if (!hospedagem) {
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
            <img src={hospedagem.url_imagem_1} alt={hospedagem.nome} />
          </div>
          <div>
            <img src={hospedagem.url_imagem_2} alt={hospedagem.nome} />
          </div>
        </div>
        <p>Estrelas: {hospedagem.estrelas}</p>
        <p>Tipo: {hospedagem.tipo}</p>
        <p>Website: {hospedagem.website}</p>
        <p>Telefone: {hospedagem.telefone}</p>
        <p>Email: {hospedagem.email}</p>
        <p>Endereço: {hospedagem.endereco}</p>
       
      </div>
      <div className="info">
        <h1>{hospedagem.nome}</h1>
        <p>{hospedagem.descricao}</p>
        <div className="comentario">
      <Comentarios/>
      </div>
      </div>
    </div>
  );
}

export default HospedagemDetalhes;
