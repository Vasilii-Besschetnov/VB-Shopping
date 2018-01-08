import React from "react";
import { NavLink  } from "react-router-dom";
import styles from "./Header.css";

const createLink = (text, path = "/")=> {
    return (
        <NavLink key={path} to={path}
            exact={true}
            className={styles.link}
            activeClassName={styles.active}>
            {text}
        </NavLink>
    );
}

const Header = (props) => {
    const links = [{
        text: "Home"
    },
    {
        text: "Stores",
        path: "/Stores"
    },
    {
        text: "Categories",
        path: "/Categories"
    },
    {
        text: "Resume",
        path: "/Resume"
    }];
    
    return (
        <div>
            {links.map(l => createLink(l.text, l.path))}
        </div>
    );
};


export default Header;