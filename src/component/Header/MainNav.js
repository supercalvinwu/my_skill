import React from 'react'
import CustomisedButton from '../CustomisedButton'
import { useSelector } from 'react-redux'

import {userSignout} from '../../redux'
import {useDispatch} from 'react-redux'

function MainNav() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    return (
        <div className="MainNav">
            
            {/* 
                Conditional rendering 
                if user signed in   => show sign out button
                otherwise           => show sign in button
            */}
            {
                user.signedIn
                    ? <CustomisedButton
                        type="D"
                        text="Sign out"
                        handler={() => { console.log("Sign out is clicked"); dispatch(userSignout()); }}
                    />
                    : <CustomisedButton
                        type="B"
                        text="Sign in"
                        path="/signin"
                        handler={() => { console.log("Sign in is clicked") }}
                    />
            }
       

            <CustomisedButton
                type="C"
                text="Demo"
                path="/"
                handler={() => { console.log("Demo is clicked") }}
            />

            <CustomisedButton
                type="C"
                text="Project"
                path="/project"
                handler={() => { console.log("Project is clicked") }}
            />

        </div>
    )
}

export default MainNav
