import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    const gradColor = 'linear-gradient(90deg, black, red)';
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color = {gradColor}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={9}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path='/business'
              element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={9} country='in' category='business' />}
            />
            <Route
              path='/entertainment'
              element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={9} country='in' category='entertainment' />}
            />
            <Route
              path='/health'
              element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={9} country='in' category='health' />}
            />
            <Route
              path='/science'
              element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={9} country='in' category='science' />}
            />
            <Route
              path='/sports'
              element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={9} country='in' category='sports' />}
            />
            <Route
              path='/technology'
              element={<News apiKey={this.apiKey}  setProgress={this.setProgress} pageSize={9} country='in' category='technology' />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
