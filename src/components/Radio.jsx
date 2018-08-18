import React from 'react';

export default function Radio(props) {
    return (
        <label>
            <input
                type="radio"
                name={props.group}
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.children}
        </label>
    )
}
