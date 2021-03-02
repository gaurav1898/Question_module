import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import DataLists from './pages/data.list.component'
import AddDatas from "./pages/add.data.component";
import Navbar from "./components/navbar.component";


function App() {
  return (

    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route exact path="/data" component={DataLists} />
        <Route exact path="/" component={AddDatas} />
      </div>
    </Router>

  );
}

export default App;