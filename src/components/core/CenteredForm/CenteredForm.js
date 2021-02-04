import React from 'react';
import './centeredForm.styl';

function CenteredForm({fields, footer, title, actionTitle}) {
    return (
        <div class="centered-form">
            <div class="centered-form__content">
                <div class="centered-form__header">
                    <h2 class="centered-form__name">{title}</h2>
                </div>
                <div class="centered-form__fields">
                    {fields}
                </div>
                <div class="centered-form__actions">
                    <div class="centered-form__actions">
                        <button class="centered-form__action-button">{actionTitle}</button>
                    </div>
                </div>
                <div class="centered-form__footer">
                    {footer}
                </div>
            </div>
        </div>
    )
}

export {CenteredForm}