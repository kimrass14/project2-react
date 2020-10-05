import './App.css';
import React, { useState, useEffect } from 'react';
import {Link, Route} from 'react-router-dom'

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Homepage from './CategoryComponents/Homepage'
import Business from './CategoryComponents/Business'
import Health from './CategoryComponents/Health'
import Science from './CategoryComponents/Science'
import Tech from './CategoryComponents/Tech'
import Entertainment from './CategoryComponents/Entertainment'
import Sports from './CategoryComponents/Sports'

function App() {
  const [currentDate, setCurrentDate] = useState('')

  React.useEffect(() => {
    let d = new Date();
    let n = d.toDateString();
    setCurrentDate(n)
  }, [])


  return (
    <>
      <header className="head">
        <h1>Your News</h1>
        <h2>{currentDate}</h2>
      </header>
      <Navbar bg="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
            
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/business" href="#action/3.1">Business</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/health" href="#action/3.2">Health</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/science" href="#action/3.3">Science</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tech" href="#action/3.4">Tech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/entertainment" href="#action/3.5">Entertainment</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sports" href="#action/3.6">Sports</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App">
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/business">
          <Business />
        </Route>
        <Route exact path="/health">
          <Health />
        </Route>
        <Route exact path="/science">
          <Science />
        </Route>
        <Route exact path="/tech">
          <Tech />
        </Route>
        <Route exact path="/entertainment">
          <Entertainment />
        </Route>
        <Route exact path="/sports">
          <Sports />
        </Route>
      </div>
    </>
  );
}

export default App;
