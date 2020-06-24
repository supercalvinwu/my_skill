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

            {/* 
                Conditional rendering
                if user rented some VM  => show the renting statue
                otherwise               => show nth
            */}
            {
                userAreHoldingVM
                    ? <RentingStatusUserView />
                    : null
            }

        </div>
    )
}

export default MainContentAfterLogin
