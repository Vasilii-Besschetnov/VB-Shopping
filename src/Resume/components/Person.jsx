import React from "react";

const Person = () => {
    return (
        <div className="cnt-person">
            <div className="cnt-photo">
                <div className="person-photo">
                    <img src="images\MyPhoto_small.jpg" alt="Vasilii Besschetnov" />
                </div>
            </div>
            <div className="cnt-name">
                <div className="person-name">
                    Vasilii Besschetnov
                </div>
                <div className="person-position">
                    Lead Web Developer
                </div>
            </div>
        </div>
    )
};

export default Person;