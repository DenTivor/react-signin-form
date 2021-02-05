import React from 'react';
import './labeledCheckbox.styl';

/**
 * @Component
 * Checkbox with label.
 * 
 * @param {String} props.id Id for chaining label to input.
 * @param {Boolean} props.isChecked Mark of checkbox check.
 * @param {String} props.label Label for input.
 * @param {Function} props.onChange Input's onChange handler.
 */
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