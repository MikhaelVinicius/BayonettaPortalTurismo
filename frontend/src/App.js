
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AtividadeList from './pages/AtividadeList';
import PontoTuristicoList from './pages/PontoTuristicoList';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/atividades" component={AtividadeList} />
        <Route exact path="/pontos-turisticos" component={PontoTuristicoList} />
       
      </Switch>
    </Router>
  );
}

export default App;