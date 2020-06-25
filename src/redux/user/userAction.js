import {FETCH_USER_SUCCESS, USER_SIGNOUT} from './userType'

export const fetchUserSuccess = (userInfo)=>{
    return {
        type: FETCH_USER_SUCCESS,
        payload: {
            ...userInfo
        }
    }
}

export const userSignout = () =>{
    return {
        type: USER_SIGNOUT
    }
}
