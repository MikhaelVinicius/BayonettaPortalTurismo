import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Homepage.css'; 
import App from '../App';
import Nav from '../components/Nav'; 
import PontoTuristicoList from './PontoTuristicoList';
import Footer from '../components/footer';

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
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://mediaim.expedia.com/destination/1/255802739e639a1f610362ba2a9b30e8.jpg" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
      <h1>Bem-vindo ao Portal de Turismo</h1>
      
        <button onClick={scrollToPontoTuristicoList}   className="cta-btn">Explorar</button>
      </div>
    </div>
   
  
  </div>
  
 
</div>
     
      <Footer/>
  </div>
    );
  }
  
  export default Homepage;