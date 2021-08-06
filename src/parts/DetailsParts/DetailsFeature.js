import React from 'react'
import Button from 'smartComponent/Button';
import InputStay from './InputStay';
import PickDate from './PickDate';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';

export default function DetailsFeature(props) {  
    return (
        <Fade>
            <section className="container">
                <div className="col">
                    <div className="container-grid">
                        <Fade down>
                            <div className="item column-7 row-1">
                                <div>
                                    <h4 className="mb-4 h6">Description</h4>
                                    <p dangerouslySetInnerHTML={ {__html: props.desc}} className="font-weight-light" style={{color:'gray', fontSize:'14px'}} ></p>
                                </div>
                            </div>
                        </Fade>
                            <div className="item column-7 row-1">
                                <div className="row pr-4">
                                    {props.features.map((data, index)=>{
                                        return(
                                            <Fade right delay={300*index}>
                                                <div key={`feature-icons-${index}`} className=" card col-3 mx-auto ic-features">
                                                    <img src={data.imageUrl} alt={data._id} className="mb-1 ml-5 mt-3" style={{width:35, height:35}}/>
                                                    <p style={{fontSize:12, textAlign:'center'}}> <b>{data.qty}</b> <span className="font-weight-light">{data.name}</span></p>
                                                </div>
                                            </Fade>
                                        );
                                    })} 
                                </div>
                            </div> 
                        <Tada delay={600} duration={1000}>
                            <div className="item column-5 row-2">
                                <div className="card shadow p-3 bg-white " style={{border:'1px', borderRadius:15}}>
                                    <div className="mx-5 my-5">
                                        <h4 style={{marginBottom:40}}>Start Booking</h4>
                                        <h4>
                                            <span style={{color:'#A092F9'}}>$ {props.price} USD</span> <span className="font-weight-normal text-gray-600">  per night</span> 
                                        </h4>
                                        <p className="font-weight-light text-gray-500 mt-3" style={{fontSize:14}}>How long you will stay?</p>
                                        <InputStay/>
                                        <p className="font-weight-light text-gray-500 mt-3" style={{fontSize:14}}>Pick a date</p>
                                        <PickDate />
                                        <p className="font-weight-light text-gray-500 mt-3" style={{fontSize:14}}>You will pay about <span className="font-weight-bold text-gray-900">$ {props.price} USD</span> for <span className="font-weight-bold text-gray-900">1 nights</span></p>
                                        <Button className="btn w-100 align-item-center justify-content-center" hasShadow isPrimary >Continue to Book</Button>
                                    </div>
                                </div>
                            </div>
                        </Tada>
                    </div>
                </div>
            </section>
        </Fade>
    )
}
