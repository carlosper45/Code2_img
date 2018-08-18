import React from 'react';

export default function Radio({ group, value, checked, onChange, children }) {
    return (
        <label>
            <input
                type="radio"
                name={group}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            {children}
        </label>
    )
}
