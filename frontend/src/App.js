
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AtividadeList from './pages/AtividadeList';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/atividades" component={AtividadeList} />
       
      </Switch>
    </Router>
  );
}

export default App;