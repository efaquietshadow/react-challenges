import React, {useState} from 'react'

export default function color(){
    const [currentColor, updateColor] = useState("black")

    function colorChanger() {
        const colorValue = document.querySelector("#colorInput2").value
        updateColor(colorValue)
        
    }

        return (
            <div className='my-component'>
                <div className="words-to-color" style={{color: currentColor}}>
                    <h1>Color Me!</h1>
                </div>
                <input type="text" name="colorInput" id="colorInput2"></input>
                <button onClick={() => {colorChanger()}}>Submit</button>
            </div>
        )
}