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
        <p>Telefone: {restaurante.telefone}</p>
        <p>Email: {restaurante.email}</p>
        <p>Endereço: {restaurante.endereco}</p>
        <p>Website: {restaurante.website}</p>
        <p>Horario de funcionamento: {restaurante.horario_funcionamento}</p>
      </div>
      <div className="info">
        <h1>{restaurante.nome}</h1>
        <p>{restaurante.descricao}</p>
      
      </div>
    </div>
  );
}

export default RestauranteDetalhe;
