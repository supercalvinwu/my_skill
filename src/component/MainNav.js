import React from 'react'
import CustomisedButton from './CustomisedButton'

function MainNav() {

    // temporary fake data
    const signedIn = false;

    return (
        <div className="MainNav">
            
            {/* 
                Conditional rendering 
                if user signed in   => show sign out button
                otherwise           => show sign in button
            */}
            {
                signedIn
                    ? <CustomisedButton
                        type="D"
                        text="Sign out"
                        handler={() => { console.log("Sign out is clicked") }}
                    />
                    : <CustomisedButton
                        type="B"
                        text="Sign in"
                        handler={() => { console.log("Sign in is clicked") }}
                    />
            }
       

            <CustomisedButton
                type="C"
                text="Demo"
                handler={() => { console.log("Demo is clicked") }}
            />

            <CustomisedButton
                type="C"
                text="Project"
                handler={() => { console.log("Project is clicked") }}
            />

        </div>
    )
}

export default MainNav
