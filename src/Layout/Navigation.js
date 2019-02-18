import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
            <NavLink className="navbar-brand mainOne" to="/" exact>Pizza Builder</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <NavLink className="navbar-brand" to="/Ingredients" disabled activeClassName="disabled">Lista pizz</NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;