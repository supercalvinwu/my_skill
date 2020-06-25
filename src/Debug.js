import React from 'react'
import {rent_a_vm, user_release_a_vm} from './share_function'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'

function Debug() {

    const user = useSelector((state) => state.user)

    return (
        <div>
            <button onClick={()=>user_release_a_vm(user)}>User release a vm</button>
        </div>
    )
}

export default Debug
