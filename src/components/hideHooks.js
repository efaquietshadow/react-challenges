import React, { useState } from 'react'

export default function hideHook() {
    const [is_hidden, updateVisibility] = useState("visible-text")

    function makeHidden(text) {
        updateVisibility(text)
    }

        return (
            <div className='my-component'>
                <div className={is_hidden}>
                    <h1>Hide me!</h1>
                </div>   
                <button onClick={() => {makeHidden("hidden-text")}}>Hide</button>
                <button onClick={() => {makeHidden("visible-text")}}>Show</button>
            </div>
        )
}