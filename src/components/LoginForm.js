import React, {useContext, useState} from 'react';
import {
    LabeledCheckbox,
    LabeledInput,
    CenteredForm,
} from './core';
import {EMAIL_REGEX, PASSWORD_REGEX} from '../constants';
import {Context} from '../context';
import axios from 'axios';

const createUser = (dispatch, user) => {
    axios.post('https://reqres.in/api/register', {"email": "eve.holt@reqres.in","password": "pistol"})
    // axios.post('http://localhost:8000/api/login', user)
    .then(resp => resp.data)
    .then(user => dispatch({
        type: 'userSuccessLogin', 
        payload: user }))
    .catch(err => dispatch({
        type: 'userFailedLogin', 
        payload: err, 
        error: true })
    );
  };

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

    const handleEmailFieldChange = (value) => {
        setLocalState({
            ...localState,
            email: value
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

    const handleEmailFieldBlur = () => {
        const isCorrect = EMAIL_REGEX.test(localState.email);

        setLocalState({
            ...localState,
            isEmailCorrect: isCorrect,
            showEmailErrorMessage: !isCorrect,
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
        createUser(
            dispatch, 
            {
                email: localState.email,
                password: localState.password,
                isRemember: localState.isRemember,
            }
        )
        // dispatch({
        //     type: 'userLogin',
        //     payload: {
        //         email: localState.email,
        //         password: localState.password,
        //         isRemember: localState.isRemember,
        //     }
        // })
    }

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