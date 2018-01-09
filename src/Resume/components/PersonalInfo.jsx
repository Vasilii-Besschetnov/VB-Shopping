import React from "react";

const PersonalInfo = () => {
    return (
    <div class="header">
        <div className="row">
            <div className="col-xs-4">
                Phone:
            </div>
            <div className="col-xs-8">
                650-495-23-88
            </div>
        </div>
        <div className="row">
            <div className="col-xs-4">
                Email:
            </div>
            <div className="col-xs-8">
                <a href="mailto:vbesschetnov@yandex.ru">vbesschetnov@yandex.ru</a>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-4">
                Address:
            </div>
            <div className="col-xs-8">
                San Jose CA 95134<br></br>
                185 Estancia Dr.
            </div>
        </div>
    </div>
    );
}

export default PersonalInfo;