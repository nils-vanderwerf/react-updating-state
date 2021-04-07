// Code ClickityClick Component Here
import React from 'react';

export default class ClickityClick extends React.Component {
    constructor() {
        super();
    

//Define the initial state:
    this.state = {
        hasBeenClicked: false,
    }

    }
    handleClick = (event) => {
        event.preventDefault();
        this.setState (previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked,
            }
        })
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}
