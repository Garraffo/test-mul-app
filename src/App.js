import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //router para acceder a distintas vistas
import Home from './js/components/HomePage/homepage';
import ListaBusqueda from './js/components/ListaBusqueda/listabusqueda';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/listabusqueda" component={ListaBusqueda} />
        </div>
      </Router>
    );
  }
}

export default App;
