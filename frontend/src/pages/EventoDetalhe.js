import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 

function EventoDetalhe(props) {
  const [eventos, setEventos] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/eventos/${props.match.params.id}`).then(response => {
        setEventos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  if (!eventos) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="detalhes">
      <header>
        <Nav /> 
      </header>
      <div className="imagem">
        <img src={eventos.imagem1} alt={eventos.nome} />
      </div>
      <div className="info">
        <h1>{eventos.nome}</h1>
        <p>{eventos.descricao}</p>
        <p>{eventos.localizacao}</p>
        <p>{eventos.horario_abertura}</p>
        <p>{eventos.horario_fechamento}</p>
      </div>
    </div>
  );
}

export default EventoDetalhe;
