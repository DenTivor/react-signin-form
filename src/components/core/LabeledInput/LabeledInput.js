import React from 'react'
import './labeledInput.styl';

/**
 * @Component
 * Input with label.
 * 
 * @param {String} props.errorMessage Error message text.
 * @param {String} props.label Text for label.
 * @param {Function} props.onChange Input's onChange handler.
 * @param {Function} props.onInputBlur Input's onBlur handler.
 * @param {Boolean} props.showErrorMessage Mark of showing error message.
 * @param {String} props.type Input type.
 * @param {String} props.value Input value.
 */
function LabeledInput({
    errorMessage,
    label,
    onChange,
    onInputBlur,
    showErrorMessage = false,
    type = 'text',
    value
}) {
    /**
     * Handle input change.
     * 
     * @param {React.SyntheticEvent} event 
     */
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