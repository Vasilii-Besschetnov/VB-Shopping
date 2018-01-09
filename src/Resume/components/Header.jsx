import React from "react";
import PersonalInfo from "./PersonalInfo";
import Person from "./Person";

const Header = () => {
    return (
        <div class="header">
            <div class="max-width">
                <div class="row">
                    <div class="col-xs-8">                
                        <Person/>
                    </div>
                    <div class="col-xs-4">
                        <PersonalInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header;