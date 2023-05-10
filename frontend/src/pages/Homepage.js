import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Homepage.css'; 
import App from '../App';
import Nav from '../components/Nav'; 

function Homepage() {

  
  
    return (
      <div>
      <header>
        <Nav /> 
      </header>
      <main>
        <h1>Bem-vindo ao Portal de Turismo</h1>
        <p>Encontre os melhores destinos, hospedagens, restaurantes e atividades turísticas.</p>
        <button  className="cta-btn">Explorar</button>
      </main>
      
    </div>
    );
  }
  
  export default Homepage;