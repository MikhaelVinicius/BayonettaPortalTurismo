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
        <p>Encontre os melhores destinos, hospedagens, restaurantes e atividades turísticas.</p>
        <button onClick={scrollToPontoTuristicoList}   className="cta-btn">Explorar</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.postimg.cc/pVzg3LWn/2.jpg" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Slider One Item</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.postimg.cc/0y2F6Gpp/3.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Slider One Item</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
     
      <Footer/>
  </div>
    );
  }
  
  export default Homepage;