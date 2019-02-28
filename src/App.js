import React, { Component } from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


import PizzaMaker from "./PizzaMaker/PizzaMaker";
import PizzaList from "./PizzaList/PizzaList";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {

  state = {
    pizzaList: [
      {
        address: "Poznańska 22",
        cost: 6.8,
        name: "Patryk Test",
        orderId: "20190433",
        phone: "4343234234",
        where: "delivery",
        components: {
          becon: 0,
          mushroom: 2,
          tomato: 3,
        },

      },
      {
        address: "nowot 2",
        cost: 18.9,
        name: "Patryk Test",
        orderId: "20190411",
        phone: "4343234234",
        where: "delivery",
        components: {
          becon: 1,
          mushroom: 2,
          tomato: 5,
        },

      }
    ]


  }

  addPizzaList = (data) => {
    const newPizzaList = [...this.state.pizzaList, data];
    this.setState({
      pizzaList: newPizzaList
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Layout pizzaList={this.pizzaList}>
            <Route path="/pizzamaker" exact render={props => <PizzaMaker pizzaList={this.state.pizzaList} addPizza={this.addPizzaList} />} />
            <Route path="/pizzamaker/:id" render={props => <PizzaMaker exist={true} id={props.match} pizzaList={this.state.pizzaList} addPizza={this.addPizzaList} />} />
            <Route path="/pizzalist" render={props => <PizzaList pizzaList={this.state.pizzaList} />} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
