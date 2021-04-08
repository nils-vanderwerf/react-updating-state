import React, { Component, Fragment } from "react";
import '../App.css'

export default class LightSwitch extends Component {
    constructor() {
        super()

        this.state = {
            toggled: false
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                toggled: !prevState.toggled
            }
        })
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.handleClick}>
                    {this.state.toggled ? "LIGHT IS ON" : "LIGHT IS OFF"}
                </button>
            </Fragment>
        )
    }
}