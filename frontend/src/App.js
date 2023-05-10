
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AtividadeList from './pages/AtividadeList';
import PontoTuristicoList from './pages/PontoTuristicoList';
import EventoList from './pages/EventoList';
import HospedagemList from './pages/HospedagemList';
import RestauranteList from './pages/RestauranteList';
import AtividadeDetalhes from './pages/AtividadeDetalhes';
import EventoDetalhe from './pages/EventoDetalhe';
import HospedagemDetalhes from './pages/HospedagemDetalhe';
import RestauranteDetalhe from './pages/RestauranteDetalhe';


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
        <Route path="/atividades/:id" component={AtividadeDetalhes} />
        <Route path="/eventos/:id" component={EventoDetalhe} />
        <Route path="/hospedagens/:id" component={HospedagemDetalhes} />
        <Route path="/restaurantes/:id" component={RestauranteDetalhe} />
      </Switch>
    </Router>
  );
}

export default App;