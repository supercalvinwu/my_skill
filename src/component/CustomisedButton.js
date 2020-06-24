import React from 'react'

function CustomisedButton(props) {
    return (
        <div className={"CustomisedButton " + props.type}>
            <button onClick={props.handler}>{props.text}</button>
        </div>
    )
}

export default CustomisedButton
