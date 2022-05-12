import React, { Component } from 'react';
import './App.css';
import Items from './items';

 class App  extends Component {
    render(){
    return (
      <div className="container">
      <h1 className="text-center">Our List of stuff...</h1>
      <Items />
      </div>
    );
  }
}


export default App;