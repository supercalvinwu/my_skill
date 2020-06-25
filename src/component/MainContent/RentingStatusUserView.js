import React from 'react'
import CustomisedButton from '../CustomisedButton'
import ProgressBar from 'react-flexible-progressbar'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'
import LoadingSpinner from '../LoadingSpinner'

function RentingStatusUserView() {

    var user = useSelector((state) => state.user)

    useFirestoreConnect([{
        collection: 'users',
        doc: user.doc
    }])

    var userLive = useSelector(
        ({ firestore: { data } }) => data.users && data.users[user.doc]
    )

    if (!isLoaded(userLive)) {
        return <LoadingSpinner color={"#ffb625"}/>
    }

    console.log(userLive)

    return (
        <div className="RentingStatusUserView">

            <span className="lable">Num of VM that you are holding:</span>

            <div style={{ marginTop: 15, marginBottom: 5 }}>

                <span style={{ fontSize: 12, fontWeight: 400 }}>You may rent a maximum of {userLive.max_rent} VM and you have rented </span>

                <span style={{ fontSize: 25, fontWeight: 600 }}>{userLive.vm_rented}</span>

            </div>

            <ProgressBar
                width={350}
                height={20}
                progress={userLive.vm_rented / userLive.max_rent * 100}
            />

            <div style={{ 'marginTop': '20px' }}>
                <CustomisedButton
                    type={'D'}
                    text={"Release a VM"}
                    handler={() => { console.log("Release a VM is clicked") }}
                />
            </div>


        </div>
    )
}

export default RentingStatusUserView
