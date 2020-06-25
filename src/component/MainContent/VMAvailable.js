import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'

import ProgressBar from 'react-flexible-progressbar'
import LoadingSpiner from '../LoadingSpinner'

function VMAvailable() {

    
    // --------- connect to firestore, load vm info --------------
    useFirestoreConnect([
        { collection: 'meta' }
    ])

    const meta = useSelector((state) => state.firestore.ordered.meta)

    if (!isLoaded(meta)) {
        return <LoadingSpiner color={"#55d41f"}/>
    }
    
    const vm_info = meta[0]
    const vm_total = vm_info.total
    const vm_been_rented = vm_info.been_rented
    
    // ------------------------------------------------------------

    return (
        <div className="VMAvailable">

            <span className="lable">VM Available:</span>

            <div style={{marginTop:15, marginBottom:5}}>

                <span style={{fontSize:25, fontWeight:600}}>{vm_total - vm_been_rented}</span>

                <span style={{fontSize:12, fontWeight:400}}> / {vm_total} VM are available to be rented</span>

            </div>

            <ProgressBar
                width={350}
                height={20}
                progress={(vm_total - vm_been_rented) / vm_total * 100}
            />

        </div>

    )
}

export default VMAvailable
