import React from 'react';
import {
    LabeledCheckbox,
    LabeledInput,
    CenteredForm,
} from './core';

function LoginForm() {
    const renderFields = () => {
        return (
            <>  
                <LabeledInput label='Email' />
                <LabeledInput label='Password' type='password'/>
                <LabeledCheckbox id='remember' label='Remember me!'/>
            </>
        )
    }

    const renderFooter = () => {
        return (
            <>
                <div class="centered-text-block">
                    <a class="link" href="#">Forgot your password?</a>
                </div>
                <div class="centered-text-block">
                    <span class="standard-info">
                        Don't have an account <a class="link" href="#">Sign up</a>
                    </span>
                </div>
                <div class="centered-text-block">
                    <a class="link" href="#">Resend email-conformation</a>
                </div>
            </>
        )
    }

    return (
        <CenteredForm            
            actionTitle='Sign in'
            fields={renderFields()}
            footer={renderFooter()}
            title='Sign in'
        />
    )
}

export {LoginForm};