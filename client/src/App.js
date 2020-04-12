import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Entry from './pages/Entry';

function App(){
  return (
    <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home} />      
    <Route exact path="/movie/:id" component={Entry} />
    </BrowserRouter>
  )
}

export default App;
