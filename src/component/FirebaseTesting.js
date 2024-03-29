import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'

function FirebaseTesting() {

    useFirestoreConnect([
        { collection: 'meta' },
        { collection: 'users' }
    ])

    const meta = useSelector((state) => state.firestore.ordered.meta)
    const users = useSelector((state) => state.firestore.ordered.users)
    const user = useSelector((state) => state.user)

    if (!isLoaded(meta)) {
        return <div>Loading...</div>
    }
    
    if (!isLoaded(users)) {
        return <div>Loading...</div>
    }

    console.log('meta: ',meta)
    console.log('users: ',users)
    console.log('user: ', user)

    return (
        <div className="FirebaseTesting">
            
        </div>
    )
}

export default FirebaseTesting