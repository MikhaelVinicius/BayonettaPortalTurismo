import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Listagem.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav'; 
import Footer from '../components/footer';
import pontos from "../logos/noticia.png";


function NoticiasList() {
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
      <div className="pt-list">
         <header>
        <Nav /> 
      </header>
      <div>
      <h1>Notícias</h1>
      <img className='logo' src={pontos} alt="" />
      </div>
        {noticias.map(noticias => (
          <div className="pt-card" key={noticias.id}>
            <img src={noticias.imagem1} alt={noticias.titulo} />
            <div className="card-body">
              <h2>{noticias.titulo}</h2>
              <p>{limitarDescricao(noticias.descricao)}</p>
              <p>{noticias.data_postagem}</p>
              <Link to={`/noticias/${noticias.id}`} className="cta-btn">Ver mais</Link>
            </div>
          </div>
        ))}
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default NoticiasList;