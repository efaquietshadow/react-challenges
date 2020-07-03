import React, {useState} from 'react'

export default function size() {
    const [currentSize, updateSize] = useState(20)
   
    function changeFontSize(num) {
        updateSize(num + currentSize)
    }

        return (
            <div className='my-component'>
                <div className="change-my-size" style={{fontSize: currentSize + "px"}}>
                    <p>{"Current size: " + currentSize + "px"}</p>
                </div>
                {/* <input type="text" placeholder="change the font size"></input> */}
                <button onClick={() => {changeFontSize(1)}}>Bigger</button>
                <button onClick={() => {changeFontSize(-1)}}>Smaller</button>
            </div>
        )
}