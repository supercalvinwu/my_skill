import React from 'react'
import CustomisedButton from '../CustomisedButton'
import {withRouter} from 'react-router-dom';

function MainContentBeforeLogin(props) {
    console.log(props)
    return (
        <div className="MainContentBeforeLogin">
            <CustomisedButton
                type={'B'}
                text={"Sign in to borrow a VM"}
                handler={() => { console.log("Sign in to borrow a VM is clicked"); props.history.push('/signin'); }} />
        </div>
    )
}

export default withRouter(MainContentBeforeLogin);
