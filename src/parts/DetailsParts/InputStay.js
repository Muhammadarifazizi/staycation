import React, { Component } from "react";
import Number from "smartComponent/Form/InputNumber";

export default class InputStay extends Component {
  state = {
    value: 1,
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
            <Number
              max={30}
              suffix=" night"
              isSuffixPlural
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
    );
  }
}
