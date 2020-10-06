import './App.css';
import React, { useState, useEffect } from 'react';
import {Link, Route} from 'react-router-dom'

import { Navbar, Nav, Dropdown} from 'react-bootstrap'
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
<div className="app">
      <header>
          <div className="header-title">
            <h1>Your News</h1>
            <h2>{currentDate}</h2>
          </div>
          <nav className="navContainer">
            <Dropdown>
              <Dropdown.Toggle variant="gray-dark" id="dropdown-basic">Category</Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/business" href="#/action-1">Business</Dropdown.Item>
              <Dropdown.Item as={Link} to="/health" href="#/action-2">Health</Dropdown.Item>
              <Dropdown.Item as={Link} to="/science" href="#/action-3">Science</Dropdown.Item>
              <Dropdown.Item as={Link} to="/tech" href="#/action-3">Tech</Dropdown.Item>
              <Dropdown.Item as={Link} to="/entertainment" href="#/action-3">Entertainment</Dropdown.Item>
              <Dropdown.Item as={Link} to="/sports" href="#/action-3">Sports</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/"><h3 className="navtext">Home</h3></Link>
          </nav>
      </header>

      <div className="main">
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
    </div>
  );
}

export default App;
