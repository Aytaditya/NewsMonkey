import React, { Component } from 'react'
import './App.css';
import Navbar from'./components/Navbar.js'
import News from './components/News.js';
//import Spinner from './components/Spinner.js';


export default class App extends Component {
  render() {

    return (
      <div>
        <Navbar/>
        <h2 className="my-3">NewsMonkey-Today's Top Headlines</h2> 
        <News pageSize={15} country="in" category="science"/> {/*setting page size as props*/}
      </div>
        
    )
    
  }
  
}

