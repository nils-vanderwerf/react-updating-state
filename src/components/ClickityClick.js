import React, { Component } from "react";


export default class ClickityClick extends Component {
    constructor() {
        super();
        //Define the initial state:
        this.state = {
            count: 0
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        let newCount = this.state.count + 1
        this.setState ({
            count: newCount
        })
    }

    render() {
        return (
            <div>
                <h1>Button has been clicked {this.state.count} times!</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}
