import { USER_SIGNOUT, FETCH_USER_SUCCESS, BORROW_A_VM } from './userType'
import { act } from 'react-dom/test-utils'

const initialUserState = {
    signedIn: false,
    doc: "",
    name: "",
    id: "",
    max_borrow: null,
    vm_borrowed: null
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
                max_borrow: action.payload.max_borrow,
                vm_borrowed: action.payload.vm_borrowed
            }
        case USER_SIGNOUT:
            return {
                ...state,
                signedIn: false,
                doc: "",
                name: "",
                id: "",
                max_borrow: null,
                vm_borrowed: null
            }
        default:
            return state
    }
}

export default userReducer