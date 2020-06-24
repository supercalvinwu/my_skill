import React from 'react'
import CustomisedButton from './CustomisedButton'

function MainNav() {
    return (
        <div className="MainNav">
            
            <CustomisedButton
                type="B"
                text="Sign in"
                handler={()=>{console.log("Sign in is clicked")}}
            />

            <CustomisedButton
                type="C"
                text="Demo"
                handler={()=>{console.log("Demo is clicked")}}
            />

            <CustomisedButton
                type="C"
                text="Project"
                handler={()=>{console.log("Project is clicked")}}
            />

        </div>
    )
}

export default MainNav
