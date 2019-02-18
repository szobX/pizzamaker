import React from 'react';

import ComponentsMenuItem from './ComponentsMenuItem';

const ComponentsMenu = props => {
    const { components, composition } = props

    const disabledOrder = props.howMany < 3 ? true : null
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
        <div className="col-lg-4 order-md-2 border ">
            <div className="d-inline-block mx-2 my-2">
                <span className="badge badge-dark mx-2">Aktualna kwota: {(props.costs + props.basicPrice)}  zł</span>
                <button onClick={props.reset} className="btn btn-warning">Reset</button>
            </div>
            {pizzaMenuList}
            <div className="p-4">
                {disabledOrder && <p className="text-center text-warning">Musisz wybrać przynamniej 3 składniki!</p>}
                <button
                    disabled={disabledOrder}
                    data-toggle="modal" data-target="#form"
                    className="btn btn-primary btn-lg btn-block"> Zamów</button>

            </div>
        </div>
    );
}

export default ComponentsMenu;
