import React, { Component } from "react";
import ShowPizza from './ShowPizza/ShowPizza';
import ComponentsMenu from './ComponentsMenu/ComponentsMenu'
import { PizzaBase, ComponentsPizza } from '../List/componentPizza';
import FormOrder from '../Layout/FormOrder';
import swal from 'sweetalert';
class PizzaMaker extends Component {
  state = {
    pizzaComponents: { ...ComponentsPizza },
    pizzaComposition: {},
    basicprice: 4,
    costs: 0,
    howManyComp: 0,
  }


  createOrder = (data) => {
    const datas = data;
    let date = new Date();
    datas.orderId = date.getFullYear().toString() + '' + (date.valueOf().toString()).slice(9, 11) + Math.floor(Math.random() * 40)
    datas.cost = this.state.costs
    datas.components = this.state.pizzaComposition

    // let dataJson = JSON.stringify(datas)
    // console.log(dataJson)
    this.props.addPizza(datas)
    setTimeout(
      swal({
        icon: "success",
        text: `${datas.name} Twoje zamówienie nr: ${datas.orderId} zostało złożone czas oczekiwanie na ten moment to 45 minut`
      }

      ), 500)
    this.createEmptyPizza()
  }


  componentDidMount() {

    if (this.props.exist) {
      this.fillNewPizza()
    }
    this.createEmptyPizza()
  }

  restartPizza = () => {

    swal("Czy napewno chcesz zresetować pizze?", {
      buttons: {
        catch: {
          text: "TAK",
          value: "yes",
        },
        defeat: false
      },
    })
      .then((value) => {
        switch (value) {
          case "yes":
            swal("Resetuje pizze");
            this.createEmptyPizza()
            break;
          case "not":
            break;
        }
      });

  }
  createEmptyPizza = () => {
    const newPizza = this.createNewPizza();
    this.setState({
      pizzaComposition: newPizza,
      costs: 0,
      howManyComp: 0,
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

  fillNewPizza = () => {
    let fillPizza = {}
    let costs = null
    Object.keys(this.props.pizzaList).forEach(pizza => {
      const index = this.props.pizzaList[pizza].orderId;
      if (index === this.props.id.params.id.toString()) {
        fillPizza = this.props.pizzaList[pizza].components
        console.log(fillPizza)
        costs = this.props.pizzaList[pizza].costs
      }
    })
    this.setState({
      pizzaComposition: fillPizza,
      costs: costs,
      howManyComp: 5,
    })
  }


  createNewPizza = () => {
    let newPizza = {}
    // console.log(newPizza)
    let pizzaKeys = Object.keys(this.state.pizzaComponents)
    // console.log(pizzaKeys);
    for (let i = 0; i < pizzaKeys.length; i++) {
      newPizza[pizzaKeys[i]] = 0;
    }
    return newPizza
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
        <FormOrder
          composition={this.state.pizzaComposition}
          price={this.state.costs + this.state.basicprice}
          createOrder={this.createOrder}
        />
      </div>

    );
  }
}

export default PizzaMaker;

