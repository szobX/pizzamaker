import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <NavLink className="navbar-brand" to="/pizzamaker" activeClassName="disabled">Kreator Pizzy</NavLink>
                    <NavLink className="navbar-brand" to="/pizzalist" activeClassName="disabled">Lista pizz</NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;