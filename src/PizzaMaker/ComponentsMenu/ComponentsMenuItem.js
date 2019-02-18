import React, { Component } from 'react';

const ComponentsMenuItem = (props) => {
    return (
        <li className="list-group-item align-items-center">
            <div className="d-flex p-3 border align-items-center">
                <h4>{props.name}</h4>
                <em className="px-2">{props.price}.zł</em>
                <button
                    className="btn btn-success  align-content-end"
                    disabled={props.quantify === 10 ? true : false}
                    onClick={props.handleClick.bind(this, true, props.keyname, props.price)}>+</button>
                <span className="align-content-center counter">{props.quantify}</span>
                <button
                    className="btn btn-danger  align-content-end	"
                    disabled={props.quantify === 0 ? true : false}
                    onClick={props.handleClick.bind(this, false, props.keyname, props.price)}>-</button>
            </div>
        </li>
    );
}

export default ComponentsMenuItem;



