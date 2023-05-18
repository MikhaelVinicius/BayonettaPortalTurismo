import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav2'; 
import Comentarios from '../components/comentarios';
import $ from 'jquery';
import Footer from '../components/footer';
import  '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/slick-carousel/slick/slick.js';
import Maps from '../components/Maps';

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
        <p>
  <i className="fas fa-star"></i>
  Estrelas: {hospedagem.estrelas}
</p>
<p>
  <i className="fas fa-hotel"></i>
  Tipo: {hospedagem.tipo}
</p>
<p>
  <i className="fas fa-globe"></i>
  Website: {hospedagem.website}
</p>
<p>
  <i className="fas fa-phone"></i>
  Telefone: {hospedagem.telefone}
</p>
<p>
  <i className="fas fa-envelope"></i>
  Email: {hospedagem.email}
</p>
<p>
  <i className="fas fa-map-marker-alt"></i>
  Endereço: {hospedagem.endereco}
</p>
<Maps address = {hospedagem.endereco}/>
       
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
