import React from 'react'
import CustomisedButton from '../CustomisedButton'
import BorrowingStatusUserView from './BorrowingStatusUserView'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'
import LoadingSpinner from '../LoadingSpinner'
import {borrow_a_vm} from '../../share_function'

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
                text={"Borrow a VM"}
                handler={async() => { var {success, msg} = await borrow_a_vm(user); if(!success){alert(msg)}}} />

            <div style={{ margin: 20 }} />
            {/* 
                Conditional rendering
                if user borrowed some VM  => show the borrowing statue
                otherwise               => show nth
            */}
            {
                (userLive.vm_borrowed > 0)
                    ? <BorrowingStatusUserView />
                    : null
            }

        </div>
    )
}

export default MainContentAfterLogin
