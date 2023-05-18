import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Nav.css"
import axios from 'axios';


function Nav() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

 
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    axios.get(`/api/search?term=${searchTerm}`)
      .then(response => {
        setSearchResults(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ backdropFilter: 'blur(5px)' }}>
      <div>
        <a class="titulo" href="#">Portal Garanhuns</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="links">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/pontos-turisticos" className="nav-link">Pontos Turísticos</Link>
            </li>
            <li className="nav-item">
              <Link to="/hospedagens" className="nav-link">Hospedagens</Link>
            </li>
            <li className="nav-item">
              <Link to="/restaurantes" className="nav-link">Restaurantes</Link>
            </li>
            <li className="nav-item">
              <Link to="/atividades" className="nav-link">Atividades</Link>
            </li>
            <li className="nav-item">
              <Link to="/eventos" className="nav-link">Eventos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  
}

export default Nav;

