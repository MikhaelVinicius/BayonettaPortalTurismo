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
        <p>Telefone: {eventos.telefone}</p>
        <p>Website: {eventos.website}</p>
        <p>Email: {eventos.email}</p>
        <p>Endereço: {eventos.endereco}</p>
        <p>Horario de abertura: {eventos.horario_abertura}</p>
        <p>Horario de fechamento: {eventos.horario_fechamento}</p>
      </div>
      <div className="info">
        <h1>{eventos.nome}</h1>
        <p>{eventos.descricao}</p>
       
      </div>
    </div>
  );
}

export default EventoDetalhe;
