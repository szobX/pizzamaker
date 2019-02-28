import React from 'react';
import '../styles/PizzaList.css';
import PizzaListItem from './PizzaListItem'
const PizzaList = (props) => {
    console.log(props.pizzaList)
    const PizzaList = props.pizzaList.map(pizza => (
        <PizzaListItem {...pizza} key={pizza.orderId + (Math.random() * 6)} />
    ))
    return (

        <div className="container">
            <div className="row text-center  py-4">

                {PizzaList}

            </div>
        </div>
    );
}

export default PizzaList;