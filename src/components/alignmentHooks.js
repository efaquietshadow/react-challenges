import React, { useState } from 'react'

export default function alignment() {
    const [alignment, updateAlignment] = useState("center-aligned")
    
    const alignmentChange = (align)  => {
        updateAlignment(align)
    }

    return (
        <div className='my-component'> 
            <div className={alignment}>
                <h1>Align me!</h1>
            </div>
            <div className="button-wrapper">
                <button onClick={() => {alignmentChange("left-aligned")}}>Left</button>
                <button onClick={() => {alignmentChange("center-aligned")}}>Center</button>
                <button onClick={() => {alignmentChange("right-aligned")}}>Right</button>
            </div>
        </div>
    )
}


