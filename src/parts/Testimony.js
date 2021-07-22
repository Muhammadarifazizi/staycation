import React from 'react';
import Stars from 'smartComponent/Stars';
import Button from 'smartComponent/Button';

import TestimonialAccent from '../assets/images/testimonial1_frame.png';

export default function Testimony({data}) {
    return (
        <section className="container">
            <div className="row align-item-center">
                <div className="col-auto" style={{marginRight:60}}>
                    <div className="testimonial-hero" style={{margin :`30px 0 0 30px`}}>
                        <img 
                            src={TestimonialAccent} 
                            alt="Testimonial frame" 
                            className="position-absolute" 
                            style={{margin: `-30px 0 0 -30px`}} 
                        />
                        <img 
                            src={data.imageUrl} 
                            alt="Testimonial" 
                            className="position-absolute"  
                            style={{zIndex:1}}
                        />
                    </div>
                </div>
                <div className="col">
                    <h4 style={{marginBottom:40}}>
                       {data.name}
                    </h4>
                    <Stars value={data.rate} width={35} height={35} spacing={4}></Stars>
                    <p style={{marginLeft:80}}>{data.rate} from 5.0</p>
                    <h5 className="h2 font-weight-light line-height-2 my-3">
                        {data.content}
                    </h5>
                    <span className="text-gray-500 font-weight-light">
                        {data.familyName}, {data.familyOccupation}
                    </span>
                    <div>
                        <Button className="btn px-5 py-2"  style={{marginTop:40}} isPrimary hasShadow type="link" href={`/testimonial/${data._id}`}>
                            Read Their Story
                        </Button>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
