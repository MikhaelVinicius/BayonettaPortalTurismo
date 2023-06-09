import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Homepage.css'; 
import App from '../App';
import Nav from '../components/Nav'; 
import PontoTuristicoList from './PontoTuristicoList';
import Footer from '../components/footer';
import CardPubli from '../components/cardPubli';
import Acontecendo from '../components/Acontecendo';
import Contato from '../components/Contato';
import Fazeres from '../components/Fazeres';
import Parceiros from '../components/Parceiros';

function Homepage() {

  const pontoTuristicoListRef = useRef(null);
 

  const scrollToPontoTuristicoList = () => {
    pontoTuristicoListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  
  
  
    return (
      <div>
      <header>
        <Nav /> 
      </header>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <Contato/>
 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  class="d-block w-100 blur" src="https://mediaim.expedia.com/destination/1/255802739e639a1f610362ba2a9b30e8.jpg" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
        <div class="card-publi">
        <CardPubli/>
        </div>
        
      <h1>Bem-vindo ao Portal de Turismo</h1>
      
        <button  className="cta-btn"><Link to="/pontos-turisticos" className="nav-link">Explorar</Link></button>
      </div>
    </div>
   
  
  </div>
  <Acontecendo/>
  <Fazeres/>
  <Parceiros/>
</div>
     
      <Footer/>
  </div>
    );
  }
  
  export default Homepage;