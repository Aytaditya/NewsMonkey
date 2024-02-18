import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div className="my-3 container">
          <h2 className="my-4 text-center">NewsMonkey-today's Top Headlines</h2>
          </div>
          <Routes>
          <Route path="/" element={<News pageSize={9} country="in" category="general" />} />
          <Route path='/business' element={<News pageSize={9} country='in' category='business' />} />
          <Route path='/entertainment' element={<News pageSize={9} country='in' category='entertainment' />} />
          <Route path='/health' element={<News pageSize={9} country='in' category='health' />} />
          <Route path='/science' element={<News pageSize={9} country='in' category='science' />} />
          <Route path='/sports' element={<News pageSize={9} country='in' category='sports' />} />
          <Route path='/technology' element={<News pageSize={9} country='in' category='technology' />} />

          </Routes>
        </Router>
      </div>
    );
  }
}
