import React, {Component} from 'react'

export default class Hide extends Component {
    constructor(props) {
        super(props)

        this.state={
            is_hidden: "visible-text"
        }
        
        this.makeHidden=this.makeHidden.bind(this)
    }

    makeHidden(text) {
        this.setState({
            is_hidden: text
        })
    }

    render() {
        return (
            <div className='my-component'>
                <div className={this.state.is_hidden}>
                    <h1>Hide me!</h1>
                </div>   
                <button onClick={() => {this.makeHidden("hidden-text")}}>Hide</button>
                <button onClick={() => {this.makeHidden("visible-text")}}>Show</button>
            </div>
        )
    }
}

// when button is pushed the h1 tag Hide me! disappears