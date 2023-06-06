import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 
import Comentarios from '../components/comentarios';
import Footer from '../components/footer';

import $ from 'jquery';
import Parceiros from '../components/Parceiros';

import  '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/slick-carousel/slick/slick.js';

function NoticiaDetalhe(props) {
  const [noticias, setNoticias] = useState(null);
  const slickRef = useRef(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/noticias/${props.match.params.id}`).then(response => {
        setNoticias(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    if (slickRef.current && noticias) {
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
  }, [slickRef, noticias]);

  if (!noticias) {
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
            <img src={noticias.imagem1} alt={noticias.nome} />
          </div>
          <div>
            <img src={noticias.imagem2} alt={noticias.nome} />
          </div>
        </div>
        <p>
 
  Autor: {noticias.autor}
</p>
<p>

  Data da postagem: {noticias.data_postagem}
</p>



      </div>
      <div className="info">
        <h1>{noticias.titulo}</h1>
        <p>{noticias.descricao}</p>
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

export default NoticiaDetalhe;