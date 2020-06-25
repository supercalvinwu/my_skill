import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

function LoadingSpinner(props) {
    return (
        <Loader
            type="ThreeDots"
            color={props.color}
            height={100}
            width={100}
            timeout={10000} //3 secs
        />
    )
}

export default LoadingSpinner
