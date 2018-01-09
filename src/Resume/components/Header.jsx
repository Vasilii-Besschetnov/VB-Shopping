import React from "react";
import PersonalInfo from "./PersonalInfo";
import Person from "./Person";

const Header = () => {
    return (
        <div class="clearfix header">
            <div style={{float: "right"}}>
                <PersonalInfo />
            </div>
            <Person/>
        </div>
    );
};


export default Header;