import React from 'react';
import './labeledCheckbox.styl';

function LabeledCheckbox({id, label}) {
    return(
        <div class="labeled-checkbox">
            <input class="labeled-checkbox__box" type="checkbox" id={id} />
            <label class="labeled-checkbox__label" for={id}>{label}</label>
        </div>
    )
}

export {LabeledCheckbox}