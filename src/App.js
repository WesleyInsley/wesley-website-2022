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
// Toastify Import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//styling
import './styles/App.css';

//pages
import Home from './pages/home';
import Creative from './pages/Creative';
import Bio from './pages/Bio';

function App() {

  return (
    <div className="App">
    <div className="top-banner">This site is still under development. Some features and content may not be available yet.</div>
    <Navbar className="navbar-styling navbar-color" varient="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img className="nav-logo" src="https://wesleyinsley.com/Assets//Logo/w-logo.png" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link className="nav-link" href="/#/Creative">Creative Work</Nav.Link>
              <Nav.Link className="nav-link" href="/#/Bio">Bio</Nav.Link>
              <Nav.Link className="nav-link" href="https://wesleyinsley.com/Assets/Wesley%20Insley%20Resume.pdf" target="_blank">View My Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creative" element={<Creative />}></Route>
        <Route path="/bio" element={<Bio />}></Route>
        
      </Routes>
    </Router>

    <footer>
      <div>
        <a href="https://www.linkedin.com/in/wesleyinsley/" target="_blank"><img src="https://wesleyinsley.com/Assets/linkedin.png" alt="linked in" /></a>
        <a href="https://www.imdb.com/name/nm6860491/" target="_blank"><img src="https://wesleyinsley.com/Assets/imdb.png" alt="IMDb"/></a>
        <a href="mailto:friends@wesleyinsley.com"><img src="https://wesleyinsley.com/Assets/mailto.png" alt="mail to me" /></a>
      </div>
      <p>© Wesley Insley 2022</p>
    </footer>
    <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            theme="dark"
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
        />
  
    </div>
  );
}

export default App;
