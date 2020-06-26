import React, {Component} from 'react'

export default class Align extends Component {
    constructor(props) {
        super(props)

        this.state={
            alignment: "center-aligned"
        }
    
        this.alignmentChange=this.alignmentChange.bind(this);
    }

    alignmentChange(align) {
        this.setState({
            alignment: align
        })
    }

    render() {
        return (
            <div className='my-component'> 
                <div className={this.state.alignment}>
                    <h1>Align me!</h1>
                </div>
                <div className="button-wrapper">
                    <button onClick={() => {this.alignmentChange("left-aligned")}}>Left</button>
                    <button onClick={() => {this.alignmentChange("center-aligned")}}>Center</button>
                    <button onClick={() => {this.alignmentChange("right-aligned")}}>Right</button>
                </div>
            </div>
        )
    }
}


