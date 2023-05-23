import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 
import Comentarios from '../components/comentarios';
import Footer from '../components/footer';
import Maps from '../components/Maps';
import $ from 'jquery';


import  '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/slick-carousel/slick/slick.js';

function PubliDetalhe(props) {
  const [publis, setPublis] = useState(null);
  const slickRef = useRef(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/publi/${props.match.params.id}`).then(response => {
        setPublis(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    if (slickRef.current && publis) {
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
  }, [slickRef, publis]);

  if (!publis) {
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
            <img src={publis.imagem1} alt={publis.nome} />
          </div>
          <div>
            <img src={publis.imagem2} alt={publis.nome} />
          </div>
        </div>
        <p>
  <i className="fas fa-phone"></i>
  Telefone: {publis.contato}
</p>

<p>
  <i className="fas fa-map-marker-alt"></i>
  Endereço: {publis.localizacao}
</p>


<Maps address = {publis.localizacao}/>

      </div>
      <div className="info">
        <h1>{publis.nome}</h1>
        <p>{publis.descricao}</p>
        <div className="comentario">
      <Comentarios/>
      </div>
      </div>
    
    </div>
  );
}

export default PubliDetalhe;