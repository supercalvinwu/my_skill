import React from 'react'
import CustomisedButton from '../CustomisedButton'
import RentingStatusUserView from './RentingStatusUserView'
import { useSelector } from 'react-redux'

function MainContentAfterLogin() {

    const user = useSelector((state) => state.user)

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
                (user.vm_rented > 0)
                    ? <RentingStatusUserView />
                    : null
            }

        </div>
    )
}

export default MainContentAfterLogin
