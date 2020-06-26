import React from 'react'
import CustomisedButton from '../CustomisedButton'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'
import LoadingSpinner from '../LoadingSpinner'
import { firestore } from 'firebase'
import { admin_release_vm } from '../../share_function'

function MainContentAdminView() {


    useFirestoreConnect([
        { collection: 'meta' },
        { collection: 'users' }
    ])

    const meta = useSelector((state) => state.firestore.ordered.meta)
    const users = useSelector((state) => state.firestore.data.users)

    if (!isLoaded(meta)) {
        return <LoadingSpinner color={"#ffb625"} />
    }

    if (!isLoaded(users)) {
        return <LoadingSpinner color={"#ffb625"} />
    }

    var borrowerArray = []
    for (var doc in users) {
        console.log(users[doc])
        if (users[doc].vm_borrowed > 0) {
            borrowerArray.push(users[doc]);
        }
    }

    return (
        <div style={{marginTop:40}} className="MainContentAdminView">
            <table>
                <tbody>
                    <tr>
                        <th style={{ width: 100 }}>
                            Username
                    </th>
                        <th>
                            Amount
                    </th>
                    </tr>

                    {/* 
                    Conditional rendering,
                    if VM are borrowed by some user   => status will be list out
                    otherwise                       => nth 
                */}
                    {
                        borrowerArray && borrowerArray.length > 0
                            ?
                            borrowerArray.map((user, index) => {
                                return (user.vm_borrowed > 0)
                                    ? (
                                        <tr key={'tr' + user.name}>
                                            <td key={'td1' + user.name}>
                                                {user.name}
                                            </td>
                                            <td key={'td2' + user.name} className="amount">
                                                {user.vm_borrowed}
                                                <CustomisedButton
                                                    type={'D'}
                                                    text={"-1"}
                                                    handler={async () => {
                                                        var { success, msg } = await admin_release_vm(user, true);
                                                        if (!success) {
                                                            alert(msg)
                                                        }
                                                    }} />
                                                <CustomisedButton
                                                    type={'D'}
                                                    text={"Release all"}
                                                    handler={async () => {
                                                        var { success, msg } = await admin_release_vm(user, false);
                                                        if (!success) {
                                                            alert(msg)
                                                        }
                                                    }} />
                                            </td>
                                        </tr>)
                                    : (
                                        null
                                    )
                            })
                            : (<tr>
                                <td colSpan={2} style={{ color: 'grey' }}>No user are currently using any VMs.</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MainContentAdminView
