import React, { Component } from "react";
import ShowPizza from './ShowPizza/ShowPizza';
import ComponentsMenu from './ComponentsMenu/ComponentsMenu'
import { PizzaBase, ComponentsPizza } from '../List/componentPizza';
import FormOrder from '../Layout/FormOrder';
class PizzaMaker extends Component {
  state = {
    pizzaComponents: { ...ComponentsPizza },
    pizzaComposition: {},
    basicprice: 4,
    costs: 0,
    howManyComp: 0,

  }
  componentDidMount() {
    this.createEmptyPizza();
  }

  restartPizza = () => {
    const decision = prompt("czy jesteś pewny?")
    if (decision) {
      this.createEmptyPizza()
    }
  }
  createEmptyPizza = () => {
    const newPizza = this.createNewPizza();
    this.setState({
      pizzaComposition: newPizza,
      costs: 0,
    })
  }
  handleClick = (what, component, price) => {
    let editComposition = { ...this.state.pizzaComposition }
    let cost = this.state.costs;
    let howMany = this.state.howManyComp
    Object.keys(editComposition).forEach(item => {
      if (item === component && what) {
        editComposition[item]++
        cost = Math.round((cost + price) * 100) / 100
        howMany++
      }
      if (item === component && !what) {
        editComposition[item]--
        cost = Math.round((cost - price) * 100) / 100
        howMany--
      }
      this.setState(prevState => ({
        pizzaComposition: editComposition,
        costs: cost,
        howManyComp: howMany
      }))
    })
    // console.log(Object.keys(newComposition), item);
  }
  createNewPizza = () => {
    let newPizza = {}
    // console.log(newPizza)
    let pizzaKeys = Object.keys(this.state.pizzaComponents)
    // console.log(pizzaKeys);
    for (let i = 0; i < pizzaKeys.length; i++) {
      newPizza[pizzaKeys[i]] = 0;
    }
    return newPizza;
  }
  render() {
    return (

      <div className="row no-gutters h-100">
        <ShowPizza
          PizzaBase={PizzaBase}
          components={this.state.pizzaComponents}
          composition={this.state.pizzaComposition} />
        <ComponentsMenu
          handleClick={this.handleClick}
          components={this.state.pizzaComponents}
          composition={this.state.pizzaComposition}
          reset={this.restartPizza}
          basicPrice={this.state.basicprice}
          costs={this.state.costs}
          howMany={this.state.howManyComp}
        />
        <FormOrder />
      </div>

    );
  }
}

export default PizzaMaker;

