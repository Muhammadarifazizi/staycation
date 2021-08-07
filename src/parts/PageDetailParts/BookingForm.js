/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import InputNumber from "../../smartComponent/Form/InputNumber/index";
import InputDate from "../../smartComponent/Form/InputDate/index";
import Button from 'smartComponent/Button';
import Tada from 'react-reveal/Tada';

export default class BookingForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data:{
                duration:1,
                date:{
                    startDate: new Date(),
                    endDate: new Date(),
                    key : "selection"
                }
            }
        };
    }

    updateData = (e) =>{
        this.setState({
            ...this.state,
            data:{
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        });
    };

    componentDidUpdate(prevProps, prevState){
        const { data } = this.state
        
        if(prevState.data.date !== data.date){
            const startDate = new Date(data.date.startDate);
            const endDate = new Date (data.date.endDate);
            const countDuration = new Date(endDate-startDate).getDate();
            this.setState({
                data:{
                    ...this.state.data,
                    duration:countDuration
                }
            });
        }

        if(prevState.data.duration !== data.duration){
            const startDate= new Date(data.date.startDate)
            const endDate = new Date(startDate.setDate(startDate.getDate() + +data.duration -1));
            this.setState({
                ...this.state,
                data:{
                    ...this.state.data,
                    date:{
                        ...this.state.data.date,
                        endDate: endDate
                    }
                }
            })
        }
    }

    render() {

        const {data} = this.state;
        const {itemDetails, startBooking} =this.props;

        return (
            <Tada>
                <div className="card bordered shadow mr-3" style={{padding: "60px 80px", borderRadius:15}}>
                    <h4 className="mb-3">Start Booking</h4>
                    <h5 className="h2 text-teal mb-4">
                        ${itemDetails.price}{" "}
                        <span className="text-gray-500 font-weight-light">
                            per {itemDetails.unit}
                        </span>    
                    </h5>
                    <label htmlFor="duration">How long you will stay?</label>                
                    <InputNumber
                        max={30}
                        suffix={" night"}
                        isSuffixPlural
                        onChange={this.updateData}
                        name="duration"
                        value={data.duration}
                    />
                    <label htmlFor="date">Pick a date</label> 
                    <InputDate
                        onChange={this.updateData}
                        name="date"
                        value={data.date}
                    />
                    <h6 className="text-gray-500 font-weight-light" style={{marginBottom:40, marginTop:20}}>
                        You will pay {" "}
                        <span className="text-gray-900 font-weight-bold">
                            ${itemDetails.price * data.duration} USD
                        </span>{" "}
                        per{" "}
                        <span className="text-gray-900 font-weight-bold">
                        {data.duration} {data.duration !== 1 ? " nights" : itemDetails.unit }
                        </span>
                    </h6>
                    <Button
                        isPrimary
                        hasShadow
                        isBlock
                        className="btn"
                        onClick={startBooking}
                        isExternal
                        type="button"
                        href="/checkout"
                    >
                        Continue to Book
                    </Button>
                </div>
            </Tada>
        );
    }
}

BookingForm.propTypes={
    itemDetails: propTypes.object,
    startBooking: propTypes.func
};