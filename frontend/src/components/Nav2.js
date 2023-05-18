import React from 'react';
import { Link } from 'react-router-dom';
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
    <nav className="nav">
      <Link to="/" className="logo">Portal de Turismo</Link>
      <form className="search-box" onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Pesquisar..." value={searchTerm} onChange={handleSearchChange} />
        <button type="submit">Buscar</button>
      </form>
      <ul className="main-menu">
        <li><Link to="/pontos-turisticos">Pontos Turísticos</Link></li>
        <li><Link to="/hospedagens">Hospedagens</Link></li>
        <li><Link to="/restaurantes">Restaurantes</Link></li>
        <li><Link to="/atividades">Atividades</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

