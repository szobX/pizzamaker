import React, { Component } from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


import PizzaMaker from "./PizzaMaker/PizzaMaker";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Route path="/" exact component={PizzaMaker} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
