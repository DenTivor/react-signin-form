import React from 'react';
import './labeledCheckbox.styl';

function LabeledCheckbox({id, isChecked, label, onChange}) {
    return(
        <div className="labeled-checkbox">
            <input
                className="labeled-checkbox__box"
                checked={isChecked}
                id={id}
                onChange={onChange}
                type="checkbox"
            />
            <label className="labeled-checkbox__label" htmlFor={id}>{label}</label>
        </div>
    )
}

export {LabeledCheckbox}