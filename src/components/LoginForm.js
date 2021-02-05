import React, {useContext, useState} from 'react';
import {
    LabeledCheckbox,
    LabeledInput,
    CenteredForm,
} from './core';
import {
    EMAIL_REGEX,
    PASSWORD_REGEX,
    USER_SUCCESS_SIGNIN_ACTION,
    USER_FAILED_SIGNIN_ACTION
} from '../constants';
import {Context} from '../context';
import axios from 'axios';

/**
 * Call user signin API and dispatch action.
 * Use next line for service stub
 * axios.post('https://reqres.in/api/register', {"email": "eve.holt@reqres.in","password": "pistol"})
 * 
 * @param {Function} dispatch Dispatch function.
 * @param {Object} user New user for signin.
 */
const signinUserAsyncDispatch = (dispatch, user) => {
    axios.post('http://localhost:8000/api/login', user)
    .then(resp => resp.data)
    .then(user => dispatch({
        type: USER_SUCCESS_SIGNIN_ACTION, 
        payload: user }))
    .catch(err => dispatch({
        type: USER_FAILED_SIGNIN_ACTION, 
        payload: err, 
        error: true })
    );
  };

/**
 * @Component
 * Form for User signin.
 */
function LoginForm() {
    const {dispatch} = useContext(Context)
    const [localState, setLocalState] = useState({
        email: '',
        password: '',
        isRemember: false,
        isEmailCorrect: false,
        isPasswordCorrect: false,
        showEmailErrorMessage: false,
        showPasswordErrorMessage: false,
    })

    /**
     * Handle email field change.
     * 
     * @param {String} value Field value.
     */
    const handleEmailFieldChange = (value) => {
        setLocalState({
            ...localState,
            email: value
        })
    }

    /**
     * Handle password field change.
     * 
     * @param {String} value Field value.
     */
    const handlePasswordFieldChange = (value) => {
        console.log('value ' + value)
        setLocalState({
            ...localState,
            password: value
        })
    }

    /**
     * Handle "Remember me!" checkbox change.
     */
    const handleRememberCheckboxChange = () => {
        setLocalState({
            ...localState,
            isRemember: !localState.isRemember
        })
    }

    /**
     * Handle email field blur.
     */
    const handleEmailFieldBlur = () => {
        const isCorrect = EMAIL_REGEX.test(localState.email);

        setLocalState({
            ...localState,
            isEmailCorrect: isCorrect,
            showEmailErrorMessage: !isCorrect,
        })
    }

    /**
     * Handle password field blur.
     */
    const handlePasswordFieldBlur = () => {
        const isCorrect = PASSWORD_REGEX.test(localState.password);
        setLocalState({
            ...localState,
            isPasswordCorrect: isCorrect,
            showPasswordErrorMessage: !isCorrect,
        })
    }

    /**
     * Handle form button action.
     */
    const handleButtonAction = () => {
        signinUserAsyncDispatch(
            dispatch, 
            {
                email: localState.email,
                password: localState.password,
                isRemember: localState.isRemember,
            }
        )
    }

    /**
     * Render form fields.
     */
    const renderFields = () => {
        return (
            <>  
                <LabeledInput
                    errorMessage='Please enter valid email'
                    label='Email'
                    onChange={handleEmailFieldChange}
                    onInputBlur={handleEmailFieldBlur}
                    showErrorMessage={localState.showEmailErrorMessage}
                    value={localState.email}
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

    /**
     * Render form footer.
     */
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
            isActionButtonDisabled={localState.isEmailCorrect && localState.isPasswordCorrect}
            onButtonAction={handleButtonAction}
            title='Sign in'
        />
    )
}

export {LoginForm};