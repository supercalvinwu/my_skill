import React from 'react'
import CustomisedButton from './CustomisedButton'
import ProgressBar from 'react-flexible-progressbar'

function RentingStatusUserView() {

    // temporary fake data
    const maxRent = 5
    const rented = 1

    return (
        <div className="RentingStatusUserView">

            <span className="lable">Num of VM that you are holding:</span>

            <div style={{ marginTop: 15, marginBottom: 5 }}>
                
                <span style={{ fontSize: 12, fontWeight: 400 }}>You may rent a maximum of {maxRent} VM and you have rented </span>
                
                <span style={{ fontSize: 25, fontWeight: 600 }}>{rented}</span>

            </div>

            <ProgressBar
                width={350}
                height={20}
                progress={rented / maxRent * 100}
            />

            <div style={{ 'marginTop': '20px' }}>
                <CustomisedButton
                    type={'D'}
                    text={"Release a VM"}
                    handler={() => { console.log("Release a VM is clicked") }}
                />
            </div>


        </div>
    )
}

export default RentingStatusUserView
