import React, { Component } from 'react';
import InputDate from '../../smartComponent/Form/InputDate';

export default class PickDate extends Component {
    state = {
        value: {
            startDate: new Date(),
            endDate : new Date(),
            key: "selection"
        }
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <InputDate 
                max={30}
                onChange={this.handleChange}
                name="value"
                value={this.state.value}
            />   
        );
    }
}
