import React, { Component, Fragment } from 'react'
import Header from './components/header/header'
import Recommend from './views/recommend/recommend'
import TopList from './views/top-list/top-list'
import Singer from './views/singer/singer'
import Search from './views/search/search'
import Tab from './components/tab/tab'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header></Header>
          <Tab></Tab>
          <Routes>
            <Route path="/" exact element={ <Recommend /> } />
            <Route path="/recommend" exact element={ <Recommend /> } />
            <Route path="/top-list" exact element={ <TopList /> } />
            <Route path="/singer" exact element={ <Singer /> } />
            <Route path="/search" exact element={ <Search /> } />
          </Routes>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
