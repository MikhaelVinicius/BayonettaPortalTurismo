import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Listagem.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav'; 
import Footer from '../components/footer';
import pontos from "../logos/ponto.png";


function PontoTuristicoList() {
    const [pontosTuristicos, setPontosTuristicos] = useState([]);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/api/pontos_turisticos').then(response => {
          setPontosTuristicos(response.data);
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
      <h1>Pontos turísticos</h1>
      <img className='logo' src={pontos} alt="" />
      </div>
        {pontosTuristicos.map(pontoTuristico => (
          <div className="pt-card" key={pontoTuristico.id}>
            <img src={pontoTuristico.url_imagem_1} alt={pontoTuristico.nome} />
            <div className="card-body">
              <h2>{pontoTuristico.nome}</h2>
              <p>{limitarDescricao(pontoTuristico.descricao)}</p>
              <p>{pontoTuristico.localizacao}</p>
              <Link to={`/pontos-turisticos/${pontoTuristico.id}`} className="cta-btn">Ver mais</Link>
            </div>
          </div>
        ))}
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default PontoTuristicoList;