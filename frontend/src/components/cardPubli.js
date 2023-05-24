import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './cardPubli.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import  '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/slick-carousel/slick/slick.js';
import Slider from 'react-slick';




function CardPubli() {
  const [publis, setPublis] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/publi')
      .then(response => {
        setPublis(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const limitarDescricao = (descricao) => {
    const limite = 100;
    if (descricao.length > limite) {
      return descricao.slice(0, limite) + '...';
    }
    return descricao;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <Slider {...sliderSettings}>
      {publis.map(publi => (
        <div className="card" key={publi.id}>
          <img src={publi.imagem1} alt={publi.nome} />
          <div className="cardbody">
            <h2>{publi.nome}</h2>
            <p>{limitarDescricao(publi.descricao)}</p>
            <Link to={`/publi/${publi.id}`} className="ctabtn">
              Ver mais
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default CardPubli;