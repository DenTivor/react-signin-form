//Validation constants
//https://www.w3resource.com/javascript/form/email-validation.php
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const PASSWORD_REGEX = /^[a-zA-Z0-9]+$/;

//Action constants
export const USER_SUCCESS_SIGNIN_ACTION = 'USER_SUCCESS_SIGNIN'
export const USER_FAILED_SIGNIN_ACTION = 'USER_FAILED_SIGNIN'