import React from 'react';

const CheckBox = props => {
    return (
        <li>
            <input   
                onClick={props.handleChildItemCheck}
                type="checkbox"
                checked={props.isChecked}
                value={props.value}
            />
            {props.value}
        </li>
    );
};

export default CheckBox;

