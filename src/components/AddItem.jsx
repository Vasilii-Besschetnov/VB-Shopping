import React from "react";
import TextBox from "./TextBox";
import Button from "./Button";
import { formInline } from "bootstrap-css-modules/css/components.css";

const AddItem = ({
    value,
    buttonText,
    onChange,
    onAddClick
}) => {
    return (
        <div className={formInline}>
            <TextBox value={value} onChange={onChange} />
            <Button onClick={() => {
                onAddClick();
                }}>{buttonText}</Button>
        </div>
    );
};

export default AddItem;