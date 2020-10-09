import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom'

import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Homepage from './CategoryComponents/Homepage'
import Business from './CategoryComponents/Business'
import Health from './CategoryComponents/Health'
import Science from './CategoryComponents/Science'
import Tech from './CategoryComponents/Tech'
import Entertainment from './CategoryComponents/Entertainment'
import Sports from './CategoryComponents/Sports'
import Saved from './Saved/Saved'
import Search from './Search/Search'

export const Context = React.createContext(null)

function App() {
  const [currentDate, setCurrentDate] = useState('')

  React.useEffect(() => {
    let d = new Date();
    let n = d.toDateString();
    setCurrentDate(n)
  }, [])

  const [savedList, setSavedList] = useState([])

  const handleSave = (article) => {
    //onClick of article preview bookmark icon saves article. If click same article again, removes it from saved list.

      const newSaved = [...savedList]

      let articleIndex = newSaved.findIndex((item) => article.title === item.title)

      if (articleIndex >= 0) {
        newSaved.splice(articleIndex, 1)
      } else {
        newSaved.push(article)
      }
      setSavedList(newSaved)

    //CODE if button only saved article:
    // setSavedList([...savedList, article])
  }

  //In Saved component, onClick of button removes article from list
  const handleRemove = (article) => {
    const updatedSaved = [...savedList]

    let articleIndex = updatedSaved.indexOf(article)

    if (articleIndex >= 0) {
      updatedSaved.splice(articleIndex, 1)
    }
    setSavedList(updatedSaved)
  }

  return (
    <Context.Provider value={{ handleSave }}>
      <div className="app">
        <header>
          <div className="header-title">
            <h1>Your News</h1>
            <h2>{currentDate}</h2>
          </div>
          <nav className="nav-container">
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
            <Link to="/"><h3 className="navtext">Headlines</h3></Link>
            <Link to="/saved"><h3 className="navtext">Saved</h3></Link>
            <Link to="/search"><h3 className="navtext">Search</h3></Link>
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
          <Route exact path="/saved">
            <Saved savedList={savedList} handleRemove={handleRemove} />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
