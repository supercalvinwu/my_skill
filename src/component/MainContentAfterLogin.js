import React from 'react'
import CustomisedButton from './CustomisedButton'
import LendingStatusUserView from './LendingStatusUserView'

function MainContentAfterLogin() {

    const userAreHoldingVM = true;

    return (
        <div className="MainContentAfterLogin">

            <CustomisedButton
                type={'A'}
                text={"Lend a VM"}
                handler={() => { console.log("Lend a VM is clicked") }} />

            {/* show only when user are holding some VM */}
            {
                userAreHoldingVM
                    ? <LendingStatusUserView />
                    : null
            }

        </div>
    )
}

export default MainContentAfterLogin
