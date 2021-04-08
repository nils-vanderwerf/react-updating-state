import React, { Component } from "react";

export default class ButtonCounter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }

    render() {
        return(
            <div>
                <h1>Button has been clicked {this.state.count} times!</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}