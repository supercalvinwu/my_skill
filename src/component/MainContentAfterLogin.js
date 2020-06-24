import React from 'react'
import CustomisedButton from './CustomisedButton'
import RentingStatusUserView from './RentingStatusUserView'

function MainContentAfterLogin() {

    // temporary fake data
    const userAreHoldingVM = false;

    return (
        <div className="MainContentAfterLogin">

            <CustomisedButton
                type={'A'}
                text={"Rent a VM"}
                handler={() => { console.log("Rent a VM is clicked") }} />

            <div style={{margin:20}} />
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
