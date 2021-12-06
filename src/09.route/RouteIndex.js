import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from './pages/admin/Admin'
import Category from './pages/category/Category'
import Login from './pages/login/Login'



export default class RouteIndex extends Component {
  render() {
    return (
      <div>
        <h2>路由</h2>
        <Router>
          <Routes>
            <Route path='' element={<Login />} />
            <Route path='admin' element={<Admin />} >
              <Route path='category' element={< Category />} />
            </Route>
          </Routes>

        </Router>
      </div>
    )
  }
}
