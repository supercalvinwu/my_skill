import { USER_SIGNOUT, FETCH_USER_SUCCESS, RENT_A_VM } from './userType'
import { act } from 'react-dom/test-utils'

const initialUserState = {
    signedIn: false,
    doc: "",
    name: "",
    id: "",
    max_rent: null,
    vm_rented: null
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                signedIn: true,
                doc: action.payload.doc,
                name: action.payload.name,
                id: action.payload.id,
                max_rent: action.payload.max_rent,
                vm_rented: action.payload.vm_rented
            }
        case USER_SIGNOUT:
            return {
                ...state,
                signedIn: false,
                doc: "",
                name: "",
                id: "",
                max_rent: null,
                vm_rented: null
            }
        default:
            return state
    }
}

export default userReducer