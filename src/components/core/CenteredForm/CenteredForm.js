import React from 'react';
import './centeredForm.styl';

/**
 * @Component
 * Centered abstract form.
 * 
 * @param {String} props.actionTitle Action button title.
 * @param {ReactNode} props.fields Fields for form body.
 * @param {ReactNode} props.footer Fields for footer body.
 * @param {Boolean} props.isActionButtonDisabled Mark of action button disabled.
 * @param {Function} props.onButtonAction Action button handler.
 * @param {String} props.title Form title.
 */
function CenteredForm({
    actionTitle,
    fields,
    footer,
    isActionButtonDisabled = false,
    onButtonAction,
    title
}) {
    return (
        <div className="centered-form">
            <div className="centered-form__content">
                <div className="centered-form__header">
                    <h2 className="centered-form__name">{title}</h2>
                </div>
                <div className="centered-form__fields">
                    {fields}
                </div>
                <div className="centered-form__actions">
                    <div className="centered-form__actions">
                        <button
                            className="centered-form__action-button"
                            disabled={!isActionButtonDisabled}
                            onClick={onButtonAction}
                        >{actionTitle}</button>
                    </div>
                </div>
                <div className="centered-form__footer">
                    {footer}
                </div>
            </div>
        </div>
    )
}

export {CenteredForm}