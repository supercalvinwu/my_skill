import React from 'react'
import CustomisedButton from '../CustomisedButton'

function MainContentBeforeLogin() {
    return (
        <div className="MainContentBeforeLogin">
            <CustomisedButton
                type={'A'}
                text={"Sign in to rent a VM"}
                handler={() => { console.log("Sign in to rent a VM is clicked") }} />
        </div>
    )
}

export default MainContentBeforeLogin
