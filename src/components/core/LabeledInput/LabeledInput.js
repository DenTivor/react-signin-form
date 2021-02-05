import React from 'react'
import './labeledInput.styl';

function LabeledInput({
    errorMessage,
    label,
    onChange,
    onInputBlur,
    showErrorMessage = false,
    type = 'text',
    value
}) {
    const handleInputChange = (event) => {
        onChange(event.target.value)
    }

    const labelStyles = ['labeled-input__error'];
    showErrorMessage && errorMessage && labelStyles.push('anim')

    return (
        <div className="labeled-input">
            <div className={labelStyles.join(' ')} >
                <span className="labeled-input__error-message">{errorMessage}</span>
            </div>
            <label className="labeled-input__label">{label}</label>
            <input
                autoComplete="off"
                className="labeled-input__input"
                type={type}
                onChange={handleInputChange}
                onBlur={onInputBlur}
                value={value}
            />
        </div>
    )
}

export {LabeledInput}