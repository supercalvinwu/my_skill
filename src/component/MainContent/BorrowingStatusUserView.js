import React from 'react'
import CustomisedButton from '../CustomisedButton'
import ProgressBar from 'react-flexible-progressbar'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'
import LoadingSpinner from '../LoadingSpinner'
import {user_release_a_vm} from '../../share_function'

function BorrowingStatusUserView() {

    var user = useSelector((state) => state.user)

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
        <div className="BorrowingStatusUserView">

            <span className="lable">Num of VM that you are holding:</span>

            <div style={{ marginTop: 15, marginBottom: 5 }}>

                <span style={{ fontSize: 12, fontWeight: 400 }}>You may borrow a maximum of {userLive.max_borrow} VM and you have borrowed </span>

                <span style={{ fontSize: 25, fontWeight: 600 }}>{userLive.vm_borrowed}</span>

            </div>

            <ProgressBar
                width={350}
                height={20}
                progress={userLive.vm_borrowed / userLive.max_borrow * 100}
            />

            <div style={{ 'marginTop': '20px' }}>
                <CustomisedButton
                    type={'D'}
                    text={"Release a VM"}
                    handler={async () => {
                        var { success, msg } = await user_release_a_vm(user);
                        if (!success) {
                            alert(msg)
                        }
                    }}
                />
            </div>


        </div>
    )
}

export default BorrowingStatusUserView
