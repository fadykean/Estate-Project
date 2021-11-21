import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Head from "./components/Head/Head";
import Map from "./components/Map/Map";
import "./App.css";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import UserDetails from "./pages/UserDetails/UserDetails";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <div className="container flex">

        <div className="left">
          <Router>
            <Switch>
              <Route component={UserDetails} path="/user/:id" />
              <Route component={ProductDetails} path="/product/:id" />
              <Route component={Home} path="/" />
            </Switch>
          </Router>
        </div>
        <Map />

      </div>
    </div>
  );
}

export default App;
