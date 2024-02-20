import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        
<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> NewsMonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/business"><i class="fa-solid fa-business-time"></i> Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/entertainment"><i class="fa-solid fa-camera-retro"></i> Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/health"><i class="fa-solid fa-notes-medical"></i> Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/science"><i class="fa-solid fa-flask"></i> Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sports"><i class="fa-solid fa-medal"></i> Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/technology"><i class="fa-solid fa-sim-card"></i> Technology</a>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
