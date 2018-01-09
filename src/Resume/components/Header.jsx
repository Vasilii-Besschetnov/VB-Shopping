import React from "react";
import PersonalInfo from "./PersonalInfo";
import Person from "./Person";

const Header = () => {
    return (
        <div className="header">
            <div className="max-width">
                <div className="row">
                    <div className="col-xs-8">                
                        <Person/>
                    </div>
                    <div className="col-xs-4">
                        <PersonalInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header;