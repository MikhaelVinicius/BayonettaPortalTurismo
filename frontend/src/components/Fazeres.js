import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Acontecendo.css';
import { Link } from 'react-router-dom';

import Slider from 'react-slick'

function Fazeres() {
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/atividades').then(response => {
        setAtividades(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const limitarDescricao = (descricao) => {
    const limite = 200;
    if (descricao.length <= limite) {
      return descricao;
    } else {
      return descricao.substring(0, limite) + '...';
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
   
    <div>
    <h1 className='tituloO'> <div id="linha-horizontal"></div>O que fazer...<div id="linha-horizontal"></div></h1> 
    <p className='subtitulo'>Melhores atividades para se fazer em Garanhuns</p>
 
    <div className="pt-list">
    
      {atividades.map(atividade => (
        
        <div className="pt-card" key={atividade.id}>
          <img src={atividade.url_imagem_1} alt={atividade.nome} />
          <div className="card-body">
            <h2>{atividade.nome}</h2>
            <p>{limitarDescricao(atividade.descricao)}</p>
            <p>{atividade.localizacao}</p>
            <Link to={`/atividades/${atividade.id}`} className="cta-btn">Ver mais</Link>
          </div>
        </div>
        
        
      ))}
      
      
    </div>
    
    </div>
   
  );
}

export default Fazeres;