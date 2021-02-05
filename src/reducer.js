import axios from 'axios';


async function someApi() {
    return await axios.post('https://reqres.in/api/register', {"email": "eve.holt@reqres.in","password": "pistol"});
}

export default function(state, action) {
    switch (action.type) {
        case 'userSuccessLogin':
            return {
                ...state,
                id: action.payload.id,
                token: action.payload.token
            };
        default:
            return state
    }
}
  