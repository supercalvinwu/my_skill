import React from 'react'
import { useSelector } from 'react-redux'

import CloudLogo from '../CloudLogo'
import VMAvailable from './VMAvailable'
import MainContentBeforeLogin from './MainContentBeforeLogin'
import MainContentAfterLogin from './MainContentAfterLogin'
import MainContentAdminView from './MainContentAdminView'


function MainContentDemo() {

    const user = useSelector((state) => state.user)

    return (
        <div className="MainContentDemo">
            <div className="wrapper">

                <CloudLogo />

                <VMAvailable />

                {/* 
                    Conditional rendering
                    if the singed in user is admin  => show the admin view
                    else if user is signed in       => show after login view
                    else                            => show before login view 
                */}

                {
                    user.signedIn
                        ? (user.id == "admin")
                            ? <MainContentAdminView />
                            : <MainContentAfterLogin />
                        : <MainContentBeforeLogin />
                
                }

                {/* {
                    adminSignedIn
                        ? <MainContentAdminView />
                        : user.signedIn
                            ? <MainContentAfterLogin />
                            : <MainContentBeforeLogin />
                } */}


            </div>
        </div>
    )
}

export default MainContentDemo