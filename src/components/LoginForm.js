import React, {useState} from 'react';
import {
    LabeledCheckbox,
    LabeledInput,
    CenteredForm,
} from './core';
import {EMAIL_REGEX, PASSWORD_REGEX} from '../constants';

function LoginForm() {
    const [localState, setLocalState] = useState({
        login: '',
        password: '',
        isRemember: false,
        isLoginCorrect: false,
        isPasswordCorrect: false,
        showLoginErrorMessage: false,
        showPasswordErrorMessage: false,
    })

    const handleLoginFieldChange = (value) => {
        setLocalState({
            ...localState,
            login: value
        })
    }

    const handlePasswordFieldChange = (value) => {
        console.log('value ' + value)
        setLocalState({
            ...localState,
            password: value
        })
    }

    const handleRememberCheckboxChange = () => {
        setLocalState({
            ...localState,
            isRemember: !localState.isRemember
        })
    }

    const handleLoginFieldBlur = () => {
        const isCorrect = EMAIL_REGEX.test(localState.login);

        setLocalState({
            ...localState,
            isLoginCorrect: isCorrect,
            showLoginErrorMessage: !isCorrect,
        })
    }

    const handlePasswordFieldBlur = () => {
        const isCorrect = PASSWORD_REGEX.test(localState.password);
        console.log('handlePasswordFieldBlur');
        console.log(isCorrect);
        setLocalState({
            ...localState,
            isPasswordCorrect: isCorrect,
            showPasswordErrorMessage: !isCorrect,
        })
    }

    const handleButtonAction = () => {
        console.log('Action button');
    }

    const renderFields = () => {
        return (
            <>  
                <LabeledInput
                    errorMessage='Please enter valid email'
                    label='Email'
                    onChange={handleLoginFieldChange}
                    onInputBlur={handleLoginFieldBlur}
                    showErrorMessage={localState.showLoginErrorMessage}
                    value={localState.login}
                />
                <LabeledInput
                    errorMessage='Must have digits and letters'
                    label='Password'
                    type='password'
                    onChange={handlePasswordFieldChange}
                    onInputBlur={handlePasswordFieldBlur}
                    showErrorMessage={localState.showPasswordErrorMessage}
                    value={localState.password}
                />
                <LabeledCheckbox
                    id='remember'
                    label='Remember me!'
                    isChecked={localState.isRemember}
                    onChange={handleRememberCheckboxChange}
                />
            </>
        )
    }

    const renderFooter = () => {
        return (
            <>
                <div className="centered-text-block">
                    <a className="link" href="#">Forgot your password?</a>
                </div>
                <div className="centered-text-block">
                    <span className="standard-info">
                        Don't have an account <a className="link" href="#">Sign up</a>
                    </span>
                </div>
                <div className="centered-text-block">
                    <a className="link" href="#">Resend email-conformation</a>
                </div>
            </>
        )
    }

    return (
        <CenteredForm            
            actionTitle='Sign in'
            fields={renderFields()}
            footer={renderFooter()}
            isActionButtonDisabled={localState.isLoginCorrect && localState.isPasswordCorrect}
            onButtonAction={handleButtonAction}
            title='Sign in'
        />
    )
}

export {LoginForm};