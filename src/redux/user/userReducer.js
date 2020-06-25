import { USER_SIGNOUT, FETCH_USER_SUCCESS } from './userType'
import { act } from 'react-dom/test-utils'

const initialUserState = {
    signedIn: false,
    name: "",
    id: "",
    max: null,
    vm_rented: null
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                signedIn: true,
                name: action.payload.name,
                id: action.payload.id,
                max: action.payload.max,
                vm_rented: action.payload.vm_rented
            }
        case USER_SIGNOUT:
            return {
                ...state,
                signedIn: false,
                name: "",
                id: "",
                max: null,
                vm_rented: null
            }
        default:
            return state
    }
}

export default userReducer