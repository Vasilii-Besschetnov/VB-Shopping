import React from "react";
import PersonalInfo from "./PersonalInfo";

const Header = () => {
    return (
        <div class="clearfix header">
            <div style={{float: "right"}}>
                <PersonalInfo />
            </div>
            <div className="person-name">
                Vasilii Besschetnov
            </div>
            <div className="person-position">
                Lead Web Developer
            </div>
        </div>
    );
};


export default Header;