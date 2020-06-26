import React, {Component} from 'react'

export default class Color extends Component {
    constructor(props) {
        super(props)

        this.state={
            currentColor: "black"
        }
    
        this.colorChanger=this.colorChanger.bind(this)
    }

    colorChanger() {
        const colorValue = document.querySelector("#colorInput").value
        this.setState({
            currentColor: colorValue
        })
        
    }

    render() {
        return (
            <div className='my-component'>
                <div className="words-to-color" style={{color: this.state.currentColor}}>
                    <h1>Color Me!</h1>
                </div>
                <input type="text" name="colorInput" id="colorInput"></input>
                <button onClick={() => {this.colorChanger()}}>Submit</button>
            </div>
        )
    }
}