import React from 'react'
import CustomisedButton from './CustomisedButton'
import RentingStatusUserView from './RentingStatusUserView'

function MainContentAfterLogin() {

    const userAreHoldingVM = true;

    return (
        <div className="MainContentAfterLogin">

            <CustomisedButton
                type={'A'}
                text={"Rent a VM"}
                handler={() => { console.log("Rent a VM is clicked") }} />

            {/* show only when user are holding some VM */}
            {
                userAreHoldingVM
                    ? <RentingStatusUserView />
                    : null
            }

        </div>
    )
}

export default MainContentAfterLogin
