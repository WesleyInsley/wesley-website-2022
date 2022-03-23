//react import
import React, { useState } from 'react';

//Router Import
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
 } from 'react-router-dom';
 //HashLink Import
 import { HashLink } from 'react-router-hash-link';
 //Bootstrap import
 import {
  Navbar,
  Container,
  Nav 
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//styling
import './styles/App.css';

//pages
import Home from './pages/home';

function App() {

  return (
    <div className="App">
    <div className="top-banner">This site is still under development. Some features and content may not be available yet. For the old site, click <a href="https://wesleyinsley.com/old-site/" target="_blank">here</a></div>
    <Navbar className="navbar-styling navbar-color" varient="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img className="nav-logo" src="https://wesleyinsley.com/Assets//Logo/w-logo.png" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="nav-link" href="https://wesleyinsley.com/Assets/Wesley%20Insley%20Resume.pdf" target="_blank">View My Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />}></Route>
      </Routes>
    </Router>

  
    </div>
  );
}

export default App;
