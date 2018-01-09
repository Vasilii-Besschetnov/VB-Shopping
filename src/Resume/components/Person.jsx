import React from "react";

const Person = () => {
    return (
        <div class="cnt-person">
            <div class="cnt-photo">
                <div class="person-photo">
                    <img src="images\MyPhoto_small.jpg" alt="Vasilii Besschetnov" />
                </div>
            </div>
            <div class="cnt-name">
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