import React, { Component } from 'react'

export default class Practice extends Component {
    constructor(){
        super()
       this.state={
           message: 'Hello jani'
       }
    }
    changeState(){
        this.setState({
            message:'Haan jani kya haal ha'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeState()}>Click Me</button>
            </div>
        )
    }
}
