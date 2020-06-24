import React from 'react'
import CustomisedButton from './CustomisedButton'

function RentingStatusUserView() {
    return (
        <div className="RentingStatusUserView">

            <span className="lable">Num of VM that you are holding:</span>

            <span>
                a bar show number of VM that you are holding count
            </span>

            <div style={{'marginTop':'20px'}}>
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
