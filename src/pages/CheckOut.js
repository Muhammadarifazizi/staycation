import React, { Component } from 'react'
import Header from 'parts/Header';
import Fade from 'react-reveal/Fade';
import Button from 'smartComponent/Button';

import Stepper, {Meta, Numbering, MainContent, Controller} from 'smartComponent/Stepper';
// import Stepper from 'smartComponent/Stepper';
// import Meta from 'smartComponent/Stepper/Meta';
// import Numbering from 'smartComponent/Stepper/Numbering';
// import MainContent from 'smartComponent/Stepper/MainContent';
// import Controller from 'smartComponent/Stepper/Controller';

import BookingInformation from 'parts/CheckoutParts/BookingInformation';
import PaymentParts from 'parts/CheckoutParts/PaymentParts';
import Complete from 'parts/CheckoutParts/Complete';
import ItemDetails from 'json/itemDetails.json';

export default class Checkout extends Component {

    state = {
        data:{
            // will be use in booking information parts
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            // will be use in payment parts
            proofPayment: "",
            bankName: "",
            bankHolder: "",
        },
    };

    onChange = (e)=>{
        this.setState({
            data:{
                // destructure state data
                ...this.state.data,
                // edit data value base on input text 
                [e.target.name]: e.target.value
            },
        });
    };

    componentDidMount(){
        window.scroll(0, 0);
    }

    render() {
        const {data} = this.state;
        const checkout = {
            duration:3
        }
        const steps ={
            bookingInformation:{
                // for meta component
                title: "Booking Information",
                description: "Please fill up the blank fields below",
                content:(
                    // data that will be pars into booking information parts
                    <BookingInformation
                        data={data}
                        checkout={checkout}
                        ItemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                ),
            },
            payment:{
                title: "Payment",
                description: "Kindly follow the instruction below",
                content:(
                    <PaymentParts 
                        data={data}
                        ItemDetails={ItemDetails}
                        checkout={checkout}
                        onChange={this.onChange}
                    />
                ),
            },
            complete:{
                title: "Yay! Complete",
                description: null,
                content:(
                    <Complete />
                )
            },
        }

        return (
            <>
                <Header isCentered/>   
                <Stepper steps={steps}>
                    {
                        (prevStep, nextStep, currentStep, steps) =>(
                            <>
                                <Numbering
                                    data={steps}
                                    current={currentStep}
                                    style={{marginBottom:50}}
                                />
                                <Meta
                                    data={steps}
                                    current={currentStep}
                                />
                                <MainContent 
                                    data={steps}
                                    current={currentStep}
                                />

                                {currentStep === "bookingInformation" && (
                                    <Controller>
                                        {
                                            data.firstName !== "" &&
                                            data.lastName !== "" &&
                                            data.email !== "" &&
                                            data.phone !== "" && (
                                                <Fade>
                                                    <Button 
                                                        className="btn mb-3"
                                                        type="button"
                                                        isBlock
                                                        isPrimary
                                                        hasShadow
                                                        onClick={nextStep}
                                                    >
                                                        Continue to Book
                                                    </Button>
                                                </Fade>
                                            )
                                        }
                                        <Button 
                                            className="btn"
                                            type="button"
                                            isBlock
                                            isLight
                                            href={`/properties/${ItemDetails._id}`}
                                        >
                                            Cancel
                                        </Button>
                                    </Controller>
                                )}

                                {currentStep === 'payment' &&(
                                        <Controller>
                                            {
                                                data.proofPayment !== "" &&
                                                data.bankName !== "" &&
                                                data.bankHolder !== "" && (
                                                    <Fade>
                                                        <Button
                                                            className="btn btn-3"
                                                            type="button"
                                                            isBlock
                                                            isPrimary
                                                            hasShadow
                                                            onClick={nextStep}
                                                        >
                                                            Continue to Book
                                                        </Button>
                                                    </Fade>
                                                )
                                            }
                                            <Button
                                                className="btn"
                                                type="button"
                                                isBlock
                                                isLight
                                                onClick={prevStep}
                                            >
                                                Cancel
                                            </Button>
                                        </Controller>
                                )}

                                {currentStep === "complete" && (
                                    <Controller>
                                        <Button 
                                            className="btn"
                                            type="link"
                                            isBlock
                                            isPrimary
                                            hasShadow
                                            href="/"
                                        >
                                            Back to Home
                                        </Button>
                                    </Controller>
                                )}
                            </>
                        )
                    }
                </Stepper>
            </>
        )
    }
}
