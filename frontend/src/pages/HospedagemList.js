import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Listagem.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav'; 
import Footer from '../components/footer';


function HospedagemList() {
    const [hospedagens, setHospedagens] = useState([]);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/api/hospedagens').then(response => {
          setHospedagens(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    const limitarDescricao = (descricao) => {
        const limite = 200;
        if (descricao.length > limite) {
          return descricao.slice(0, limite) + '...';
        }
        return descricao;
      }
  
    return (
      <div className="pt-list">
         <header>
          <Nav /> 
        </header>
        <h1>Hospedagens</h1>
        {hospedagens.map(hospedagem => (
          <div className="pt-card" key={hospedagem.id}>
            <img src={hospedagem.url_imagem_1} alt={hospedagem.nome} />
            <div className="card-body">
              <h2>{hospedagem.nome}</h2>
           
              <p>Estrelas: {hospedagem.estrelas}</p>
              <p>{limitarDescricao(hospedagem.descricao)}</p>
              <Link to={`/hospedagens/${hospedagem.id}`} className="cta-btn">Ver mais</Link>
            </div>
          </div>
        ))}
        
      </div>
    );
  }
  
  export default HospedagemList;