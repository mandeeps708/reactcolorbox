import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class ColorBox extends React.Component {
    /* Shows a box with a color and text passed via props.
    */
    render() {
        console.log("Props: "+this.props);
        console.log(this.props)
        return (
            <div style={{background:this.props.color}} className="colorBox">
                {this.props.text}
            </div>
        );
    }
}

class InputText extends React.Component {
    /* Takes text input and sends it to ColorBox component.
    */
    constructor(props){
        super(props);
        this.state = {
            text: '',
            color: '',
        };
        // binding the function.
        this.changedInput = this.changedInput.bind(this);
    }

    // To be called each time when input text changes.
    changedInput(event) {
        this.setState({text:event.target.value , color: event.target.value});
    }

    render() {
        return (
            <div className="content">
                <h3>Type any color name or Hex code</h3>
                <p style={{ fontSize: 13}}>e.g. green, pink, lightblue, #404040</p>
                <input className="input-text" type="text" onChange={this.changedInput} />
                <ColorBox text = {this.state.text} color={this.state.color} item={this.state} />
            </div>
        );
    }

}

export default InputText;
