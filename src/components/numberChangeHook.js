import React, {useState} from 'react'

export default function number() {
    const [number, updateNumber] = useState(0)

    function numberChange(num) {
        updateNumber(num + number)
    }

        return (
            <div className='my-component'>
                <button onClick={() => {numberChange(1)}}>up</button>
                <h1>{number}</h1>
                <button onClick={() => {numberChange(-1)}}>down</button>
            </div>
        )
}