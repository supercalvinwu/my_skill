import React from 'react'
import CustomisedButton from './CustomisedButton'

function MainContentAdminView() {
    const rentingStatus = [
        { 'userName': 'Calvin Wu', amount: 4 },
        { 'userName': 'Joseph Tse', amount: 1 },
        { 'userName': 'Henry Chiu', amount: 3 }
    ]

    // const rentingStatus = null

    return (
        <div className="MainContentAdminView">
            <table>
                <tr>
                    <th style={{ width: 130 }}>
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
                    rentingStatus && rentingStatus.length
                        ? rentingStatus.map((entry, index) => {
                            return (
                                <tr keys={index}>
                                    <td>
                                        {entry.userName}
                                    </td>
                                    <td className="amount">
                                        {entry.amount}
                                        <CustomisedButton
                                            type={'D'}
                                            text={"Release all"}
                                            handler={() => { console.log("Release all is clicked") }} />
                                    </td>
                                </tr>
                            )
                        })
                        : (<tr>
                            <td colSpan={2} style={{color:'grey'}}>No user are currently using any VMs.</td>
                        </tr>)
                }
            </table>
        </div>
    )
}

export default MainContentAdminView
