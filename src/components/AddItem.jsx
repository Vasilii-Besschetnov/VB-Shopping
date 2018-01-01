import React from "react";

const AddItem = ({
    value,
    buttonText,
    onChange,
    onAddClick
}) => {
    return (
        <div>
            <input value={value} onChange={onChange} />
            <button onClick={() => {
                onAddClick();
                }}>{buttonText}</button>
        </div>
    );
};

export default AddItem;