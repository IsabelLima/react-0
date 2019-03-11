import React from 'react'
import logo from '../logo.svg';

const Navbar = (  ) => (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand col-1">
            <img src={logo} className="Navbar-logo" alt="logo" />
        </div>

        <div className="form-group justify-content-center row col-10 my-2">
            <input
                value=""
                onChange={(e) => { }}
                className="form-control col-9 mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
        </div>
    </nav>
)

export default Navbar;
