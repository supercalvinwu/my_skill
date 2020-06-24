import React from 'react'
import CustomisedButton from './CustomisedButton'

function MainContentBeforeLogin() {
    return (
        <div className="MainContentBeforeLogin">
            <CustomisedButton
                type={'A'}
                text={"Sign in to lend a VM"}
                handler={() => { console.log("Sign in to lend a VM is clicked") }} />
        </div>
    )
}

export default MainContentBeforeLogin
