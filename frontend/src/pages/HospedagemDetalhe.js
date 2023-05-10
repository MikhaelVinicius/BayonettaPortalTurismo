import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Detalhes.css';
import Nav from '../components/Nav'; 

function HospedagemDetalhes(props) {
  const [hospedagem, setHospedagem] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/hospedagens/${props.match.params.id}`).then(response => {
        setHospedagem(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  if (!hospedagem) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="detalhes">
      <header>
        <Nav /> 
      </header>
      <div className="imagem">
        <img src={hospedagem.url_imagem_1} alt={hospedagem.nome} />
        <p>Estrelas: {hospedagem.estrelas}</p>
        <p>Tipo: {hospedagem.tipo}</p>
        <p>Website: {hospedagem.website}</p>
        <p>Telefone: {hospedagem.telefone}</p>
        <p>Email: {hospedagem.email}</p>
        <p>Endereço: {hospedagem.endereco}</p>
       
      </div>
      <div className="info">
        <h1>{hospedagem.nome}</h1>
        <p>{hospedagem.descricao}</p>
        
      </div>
    </div>
  );
}

export default HospedagemDetalhes;
