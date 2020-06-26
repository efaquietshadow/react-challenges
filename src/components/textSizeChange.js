import React, {Component} from 'react'

export default class Size extends Component {
    constructor(props) {
        super(props)

        this.state={
            currentSize: 20
        }
        this.changeFontSize=this.changeFontSize.bind(this)
    }

    changeFontSize(num) {
        this.setState({
            currentSize: num + this.state.currentSize
        })
    }

    render() {
        return (
            <div className='my-component'>
                <div className="change-my-size" style={{fontSize: this.state.currentSize + "px"}}>
                    <p>{"Current size: " + this.state.currentSize + "px"}</p>
                </div>
                {/* <input type="text" placeholder="change the font size"></input> */}
                <button onClick={() => {this.changeFontSize(1)}}>Bigger</button>
                <button onClick={() => {this.changeFontSize(-1)}}>Smaller</button>
            </div>
        )
    }
}

// need to have a line of text saying the size?
// input box to type?
// have a line of text that changes size?
