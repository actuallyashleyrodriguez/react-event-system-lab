import React from "react";
import { Component } from "react";

// Code Keypad Component Here
export default class Keypad extends Component {
    keyUpHandler = () => {
        console.log('Entering password...')
    }
    render() {
        return (
            <input type="password" onKeyUp={this.keyUpHandler}/>
        )
    }
}
