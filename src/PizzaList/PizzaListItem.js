import React from 'react';
import { Link } from 'react-router-dom'
const PizzaListItem = (props) => {
    const { components } = props;
    return (

        <div className="col-lg-3 card py-2 pizza-item">
            <h5> zamówienie nr:{props.orderId}</h5>
            {Object.keys(components).map(item => {
                if (components[item] > 0) {
                    return (<li className="list-group-item"> {item} - {components[item]}</li>)
                }

            })}
            <Link to={"/pizzamaker/" + props.orderId} className="btn btn-success py-2">zamów </Link>
        </div >

    );
}

export default PizzaListItem;