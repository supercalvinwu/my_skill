import React from 'react'
import { admin_release_vm } from './share_function'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'
import CustomisedButton from './component/CustomisedButton'

function Debug() {

    const user = useSelector((state) => state.user)

    const userDoc = "O0mfkfdOB2T0dHkSEbM8"

    return (
        <div>
            <CustomisedButton
                type={'D'}
                text={"admin_release_vm"}
                handler={async () => {
                    var { success, msg } = await admin_release_vm(userDoc, false);
                    if (!success) {
                        alert(msg)
                    }
                }} />

            <CustomisedButton
                type={'D'}
                text={"admin_release_a_vm"}
                handler={async () => {
                    var { success, msg } = await admin_release_vm(userDoc, true);
                    if (!success) {
                        alert(msg)
                    }
                }} />
        </div>
    )
}

export default Debug
