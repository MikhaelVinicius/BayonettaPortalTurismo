import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 

function RestauranteDetalhe(props) {
  const [restaurante, setRestaurante] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/restaurantes/${props.match.params.id}`).then(response => {
        setRestaurante(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  if (!restaurante) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="detalhes">
      <header>
        <Nav /> 
      </header>
      <div className="imagem">
        <img src={restaurante.imagem1} alt={restaurante.nome} />
      </div>
      <div className="info">
        <h1>{restaurante.nome}</h1>
        <p>{restaurante.descricao}</p>
        <p>{restaurante.localizacao}</p>
        <p>{restaurante.tipo}</p>
      </div>
    </div>
  );
}

export default RestauranteDetalhe;
