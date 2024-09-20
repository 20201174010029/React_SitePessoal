import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import formação from './components/pages/formação';
import sobremim from './components/pages/sobremim';
import Projetosrealizados from './components/pages/Projetosrealizados';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/formação' component={formação} />
          <Route path='/sobremim' component={sobremim} />
          <Route path='/Projetosrealizados' component={Projetosrealizados} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
