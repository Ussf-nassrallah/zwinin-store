import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Upperbar from './layout/Upperbar/Upperbar'
import Navbar from './layout/Navbar/Navbar'
import Home from './pages/home/Home';
import './styles/scss/App.scss';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/login/Login';
import CreateAccount from './pages/create-account/CreateAccount';

const App = () => {
  return (
    <Router>
      <header>
        <Upperbar />
        <Navbar />
      </header>
      <Switch>
        {/* Create Account Page */}
        <Route path="/create-account">
          <CreateAccount />
        </Route>
        {/* Login Page */}
        <Route path="/login">
          <Login />
        </Route>
        {/* Checkout Page */}
        <Route path="/checkout">
          <Checkout />
        </Route>
        {/* Default Page */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
