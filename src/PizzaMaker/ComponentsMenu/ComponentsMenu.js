import React from 'react';

import ComponentsMenuItem from './ComponentsMenuItem';

const ComponentsMenu = props => {
    const { components, composition } = props

    console.log(props);
    const pizzaMenuList = Object.keys(props.components).map((key, index) => (
        <ComponentsMenuItem
            handleClick={props.handleClick}
            key={key.id}
            keyname={key}
            name={components[key].name}
            price={components[key].price}
            quantify={composition[key]}
        />
    ))
    return (
        <div className="col-md-4 order-md-2 border ">
            <div className="d-inline-block mx-2 my-2">
                <span className="badge badge-dark mx-2">Aktualna kwota: {(props.costs + props.basicPrice)}  zł</span>
                <button onClick={props.reset} className="btn btn-warning">Reset</button>
            </div>
            {pizzaMenuList}
        </div>
    );
}

export default ComponentsMenu;
