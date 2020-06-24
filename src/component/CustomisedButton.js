import React from 'react'
import {
    Link
} from "react-router-dom";

function CustomisedButton(props) {
    return (
        <div className={"CustomisedButton " + props.type}>
            {
                typeof props.path == 'undefined'
                    ? (
                        <button onClick={props.handler}>
                            {props.text}
                        </button>)
                    : (<Link to={props.path}>
                        <button onClick={props.handler}>
                            {props.text}
                        </button>
                    </Link>)
            }
        </div>
    )
}

export default CustomisedButton
