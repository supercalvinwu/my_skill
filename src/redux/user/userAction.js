import {FETCH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_REQUEST} from './userType'
import axios from 'axios'

export const fetchUserSuccess = (userInfo)=>{
    console.log(userInfo)
    return {
        type: FETCH_USER_SUCCESS,
        payload: {
            ...userInfo
        }
    }
}