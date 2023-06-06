import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Listagem.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav'; 
import Footer from '../components/footer';
import restaurante from "../logos/restaurante.png";

function RestauranteList() {
    const [restaurantes, setRestaurantes] = useState([]);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/api/restaurantes').then(response => {
          setRestaurantes(response.data);
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
     
      <h1>Restaurantes</h1>
      <img className='logo' src={restaurante} alt="" />
     
        {restaurantes.map(restaurante => (
          <div className="pt-card" key={restaurante.id}>
            <img src={restaurante.imagem1} alt={restaurante.nome} />
            <div className="card-body">
              <h2>{restaurante.nome}</h2>
              <p>{limitarDescricao(restaurante.descricao)}</p>
             
              <Link to={`/restaurantes/${restaurante.id}`} className="cta-btn">Ver mais</Link>
            </div>
          </div>
        ))}
       </div>
       <Footer/>
      </div>
    );
  }
  
  export default RestauranteList;