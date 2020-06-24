import React from 'react'
import ProgressBar from 'react-flexible-progressbar'

function VMAvailable() {

    // temporary fake data
    const totalVM = 100
    const rentedVM = 13

    return (
        <div className="VMAvailable">

            <span className="lable">VM Available:</span>

            <div style={{marginTop:15, marginBottom:5}}>

                <span style={{fontSize:25, fontWeight:600}}>{totalVM - rentedVM}</span>

                <span style={{fontSize:12, fontWeight:400}}> / {totalVM} VM are available to be rented</span>

            </div>

            <ProgressBar
                width={350}
                height={20}
                progress={(totalVM - rentedVM) / totalVM * 100}
            />

        </div>


    )
}

export default VMAvailable
