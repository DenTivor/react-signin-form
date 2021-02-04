import React from 'react'
import './labeledInput.styl';

function LabeledInput({type = 'text', label}) {
    return (
        <div class="labeled-input">
            <label class="labeled-input__label">{label}</label>
            <input class="labeled-input__input" type={type} />
        </div>
    )
}

export {LabeledInput}