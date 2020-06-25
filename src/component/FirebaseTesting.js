import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'


function FirebaseTesting() {

    useFirestoreConnect([
        { collection: 'test' },
        { collection: 'users' }
    ])

    const test = useSelector((state) => state.firestore.ordered.test)
    const users = useSelector((state) => state.firestore.ordered.users)

    if (!isLoaded(test)) {
        return <div>Loading...</div>
    }
    
    if (!isLoaded(users)) {
        return <div>Loading...</div>
    }

    console.log('test: ',test)
    console.log('user: ',users)

    return (
        <div className="FirebaseTesting">
            
        </div>
    )
}

export default FirebaseTesting