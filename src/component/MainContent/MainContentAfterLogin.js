import React from 'react'
import CustomisedButton from '../CustomisedButton'
import RentingStatusUserView from './RentingStatusUserView'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'
import LoadingSpinner from '../LoadingSpinner'
import {rent_a_vm} from '../../share_function'

function MainContentAfterLogin() {

    const user = useSelector((state) => state.user)

    useFirestoreConnect([{
        collection: 'users',
        doc: user.doc
    }])

    var userLive = useSelector(
        ({ firestore: { data } }) => data.users && data.users[user.doc]
    )

    if (!isLoaded(userLive)) {
        return <LoadingSpinner color={"#ffb625"} />
    }

    return (
        <div className="MainContentAfterLogin">

            <CustomisedButton
                type={'A'}
                text={"Rent a VM"}
                handler={async() => { var {success, msg} = await rent_a_vm(user); if(!success){alert(msg)}}} />

            <div style={{ margin: 20 }} />
            {/* 
                Conditional rendering
                if user rented some VM  => show the renting statue
                otherwise               => show nth
            */}
            {
                (userLive.vm_rented > 0)
                    ? <RentingStatusUserView />
                    : null
            }

        </div>
    )
}

export default MainContentAfterLogin
