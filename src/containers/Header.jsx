import React from "react";
import { NavLink  } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    return (
        <div>            
            <NavLink to="/"
                exact={true}
                activeClasstyle="active">
                Home
            </NavLink>
            <NavLink to="/Categories"
                activeClasstyle="active">
                Categories
            </NavLink>
        </div>
    );
};


export default Header;