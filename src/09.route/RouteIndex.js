import React, { Component } from 'react'
import { NavLink, Route, Routes,Navigate } from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Message from './pages/home/message/Message'
import Detail from './pages/home/message/Detail'
import News from './pages/home/news/News'



export default class RouteIndex extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  <Route path='about' element={<About />} />
                  <Route path='home' element={<Home />}>
                    <Route path='news' element={<News />} />
                    <Route path='message' element={<Message />}>
                      <Route path="detail/:id" element = {<Detail/>}/>
                    </Route>
                    <Route path='' element={ <Navigate to='news'/> }/>
                  </Route>
                  <Route path='' element={ <Navigate to='about'/> }/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
