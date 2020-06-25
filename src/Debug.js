import React from 'react'
import { rent_a_vm, user_release_a_vm } from './share_function'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'
import CustomisedButton from './component/CustomisedButton'

function Debug() {

    const user = useSelector((state) => state.user)

    return (
        <div>
            <CustomisedButton
                type={'D'}
                text={"user_release_a_vm"}
                handler={async () => {
                    var { success, msg } = await user_release_a_vm(user);
                    if (!success) {
                        alert(msg)
                    }
                }} />
        </div>
    )
}

export default Debug
