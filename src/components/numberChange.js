import React, {Component} from 'react'

export default class Number extends Component {
    constructor(props) {
        super(props)

        this.state={
            number: 0
        }
        this.numberChange=this.numberChange.bind(this)
    }

    numberChange(num) {
        this.setState({
            number: num + this.state.number
        })
    }

    render() {
        return (
            <div className='my-component'>
                <button onClick={() => {this.numberChange(1)}}>up</button>
                <h1>{this.state.number}</h1>
                <button onClick={() => {this.numberChange(-1)}}>down</button>
            </div>
        )
    }
}