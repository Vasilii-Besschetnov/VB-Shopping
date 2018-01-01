import React from "react";
import TextBox from "./TextBox";

const AddItem = ({
    value,
    buttonText,
    onChange,
    onAddClick
}) => {
    return (
        <div>
            <TextBox value={value} onChange={onChange} />
            <button onClick={() => {
                onAddClick();
                }}>{buttonText}</button>
        </div>
    );
};

export default AddItem;