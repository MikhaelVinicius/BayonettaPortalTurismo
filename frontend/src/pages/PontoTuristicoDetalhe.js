import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 

function PontoTuristicoDetalhe(props) {
  const [pontoTuristico, setPontoTuristico] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/pontos_turisticos/${props.match.params.id}`).then(response => {
        setPontoTuristico(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  if (!pontoTuristico) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="detalhes">
      <header>
        <Nav /> 
      </header>
      <div className="imagem">
        <img src={pontoTuristico.url_imagem_1} alt={pontoTuristico.nome} />
        
        <p>Telefone: {pontoTuristico.telefone}</p>
        <p>Email: {pontoTuristico.email}</p>
        <p>Endereço: {pontoTuristico.endereco}</p>
        <p>Horário de funcionamento: {pontoTuristico.horario_funcionamento}</p>
      </div>
      <div className="info">
        <h1>{pontoTuristico.nome}</h1>
        <p>{pontoTuristico.descricao}</p>
    
        
      </div>
    </div>
  );
}

export default PontoTuristicoDetalhe;
