import React, { Component } from 'react'
import './App.css';
import Navbar from'./components/Navbar.js'
import News from './components/News.js';


export default class App extends Component {
  render() {

    return (
      <div>
        <Navbar/>
        <h2 className="my-3">NewsMonkey-Today's Top Headlines</h2> 
        <News/>
      </div>
        
    )
    
  }
  
}

