import React, {useState, useEffect} from 'react'
import Moment from 'moment'

export default function clock(){
    const [currentTime, updateTime] = useState(Moment().format('LTS'))

    useEffect(() => {
        const liveTime = setInterval(() => {
            updateTime(Moment().format('LTS'))
        }, 1000)

        return function clearTime() {
            clearInterval(liveTime)
        }
    }, [])

        return (
            <div className='my-component'>
                <h2>{currentTime}</h2>
            </div>
        )
}
