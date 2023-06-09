import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Acontecendo.css';
import { Link } from 'react-router-dom';
import Nav from './Nav'; 
import Footer from './footer';



function Acontecendo() {
    const [noticias, setNoticias] = useState([]);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/api/noticias').then(response => {
          setNoticias(response.data);
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
      <div>
      <h1 className='tituloO'> <div id="linha-horizontal"></div>Ocorrendo em Garanhuns <div id="linha-horizontal"></div></h1> 
      <p className='subtitulo'>Fique atualizado sobre os eventos e acontecimentos da Suiça pernambucana</p>
      <div className="pt-list">
        {noticias.map(noticias => (
          <div className="pt-card" key={noticias.id}>
            <img src={noticias.imagem1} alt={noticias.titulo} />
            <div className="card-body">
              <h2>{noticias.titulo}</h2>
              <p>{limitarDescricao(noticias.descricao)}</p>
              <p>{noticias.data_postagem}</p>
              <Link to={`/noticias/${noticias.id}`} className="cta-btn">Leia mais sobre</Link>
            </div>
          </div>
        ))}
        
      </div>
      </div>
    );
  }
  
  export default Acontecendo;