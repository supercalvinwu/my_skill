import React from 'react'
import CustomisedButton from '../CustomisedButton'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'
import LoadingSpinner from '../LoadingSpinner'
import { firestore } from 'firebase'

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

    var rentorArray = []
    for (var doc in users) {
        console.log(users[doc])
        if (users[doc].vm_rented > 0) {
            rentorArray.push(users[doc]);
        }
    }

    return (
        <div className="MainContentAdminView">
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
                    if VM are rented by some user   => status will be list out
                    otherwise                       => nth 
                */}
                    {
                        rentorArray && rentorArray.length > 0
                            ?
                            rentorArray.map((user, index) => {
                                return (user.vm_rented > 0)
                                    ? (
                                        <tr key={'tr' + user.name}>
                                            <td key={'td1' + user.name}>
                                                {user.name}
                                            </td>
                                            <td key={'td2' + user.name} className="amount">
                                                {user.vm_rented}
                                                <CustomisedButton
                                                    type={'D'}
                                                    text={"-1"}
                                                    handler={() => { console.log("-1 is clicked") }} />
                                                <CustomisedButton
                                                    type={'D'}
                                                    text={"Release all"}
                                                    handler={() => { console.log("Release all is clicked") }} />
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
