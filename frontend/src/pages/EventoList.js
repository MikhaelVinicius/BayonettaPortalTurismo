import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Listagem.css';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Nav from '../components/Nav'; 



function EventoList() {
    const [eventos, setEventos] = useState([]);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/api/eventos').then(response => {
          setEventos(response.data);
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
          <h1>Eventos</h1>
          {eventos.map(evento => (
            <div className="pt-card" key={evento.id}>
              <img src={evento.imagem1} alt={evento.nome} />
              <div className="card-body">
                <h2>{evento.nome}</h2>
                <p>{limitarDescricao(evento.descricao)}</p>
                <p>{evento.localizacao}</p>
                <Link to={`/eventos/${evento.id}`} className="cta-btn">Ver mais</Link>
              </div>
            </div>
          ))}
        
        </div>
      );
    }
  
  export default EventoList;