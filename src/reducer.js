import {
    USER_SUCCESS_SIGNIN_ACTION,
    USER_FAILED_SIGNIN_ACTION
} from './constants';

export default function(state, action) {
    switch (action.type) {
        case USER_SUCCESS_SIGNIN_ACTION:
            return {
                ...state,
                id: action.payload.id,
                token: action.payload.token
            };
        case USER_FAILED_SIGNIN_ACTION:
            // TODO Implement failed signin behaviour
            return state;
        default:
            return state;
    }
}
  