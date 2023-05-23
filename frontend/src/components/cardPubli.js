import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cardPubli.css';
import { Link } from 'react-router-dom';



function CardPubli() {
    const [publis, setPublis] = useState([]);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/api/publi').then(response => {
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
      }
  
    return (
        <div className="list">
          
          {publis.map(publi => (
            <div className="card" key={publi.id}>
              <img src={publi.imagem1} alt={publi.nome} />
              <div className="cardbody">
                <h2>{publi.nome}</h2>
                <p>{limitarDescricao(publi.descricao)}</p>
                
                <Link to={`/publi/${publi.id}`} className="ctabtn">Ver mais</Link>
              </div>
            </div>
          ))}
        
        </div>
      );
    }
  
  export default CardPubli;