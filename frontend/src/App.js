
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AtividadeList from './pages/AtividadeList';
import PontoTuristicoList from './pages/PontoTuristicoList';
import EventoList from './pages/EventoList';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/atividades" component={AtividadeList} />
        <Route exact path="/pontos-turisticos" component={PontoTuristicoList} />
        <Route exact path="/eventos" component={EventoList} />
      </Switch>
    </Router>
  );
}

export default App;