
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AtividadeList from './pages/AtividadeList';
import PontoTuristicoList from './pages/PontoTuristicoList';
import EventoList from './pages/EventoList';
import HospedagemList from './pages/HospedagemList';
import RestauranteList from './pages/RestauranteList';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/atividades" component={AtividadeList} />
        <Route exact path="/pontos-turisticos" component={PontoTuristicoList} />
        <Route exact path="/eventos" component={EventoList} />
        <Route exact path="/hospedagens" component={HospedagemList} />
        <Route exact path="/restaurantes" component={RestauranteList} />
      </Switch>
    </Router>
  );
}

export default App;