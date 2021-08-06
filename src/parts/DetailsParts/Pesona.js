import React from "react";
import Fade from "react-reveal/Fade";
import Stars from "smartComponent/Stars";
import Button from "smartComponent/Button";

export default function Pesona({data, city, country, name}) {
  return (
    <Fade bottom>
        <section className="container">
            <h4 className="h6">Our Impression</h4>
            <div className="row align-item-center">
                <div className="col-auto" style={{marginRight:60}}>
                    <div className="testimonial-hero" style={{margin :`30px 0 0 30px`}}>
                        <img 
                            src={data.url} 
                            alt="Testimonial frame"
                            style={{border:0, borderRadius:15}} 
                        />
                    </div>
                </div>
                <div className="col">
                    <h4 style={{ paddingTop:30}}>
                       {name}
                    </h4>
                    <h6>{city}, {country}</h6>
                    <div className="card card-feature shadow " style={{height:250, width: 583, borderRadius:15, marginTop:70}}>
                        <div className="row ">
                            <div className="col-2 mt-4 ml-4">
                                <img src={data.imageUrl} alt="data._id" style={{width:70}} />
                            </div>
                            <div className="col-4 mt-4" style={{top:10,left:-20}}>
                                <p>{data.familyName}</p>
                                <p style={{fontSize:12, position:"absolute", top:25}}>{data.familyOccupation}, {data.country}</p>
                            </div>
                            <div className="col-3 mt-4" style={{right:-70, top:5}}>
                                <Stars value={data.rate} width={30} height={30} spacing={6} ></Stars>
                                <p style={{top:25, fontSize:12,right:30}}>{data.rate} from 5.0</p>
                            </div>
                        </div>
                        <p className="mx-5 my-4" style={{fontSize:20}} >" {data.content} "</p>
                    </div>
                    <div>
                        <Button className="btn px-5 py-2"  style={{marginTop:40}} isPrimary hasShadow type="link" href={`/testimonial/${data._id}`}>
                            Read Their Story
                        </Button>
                    </div>
                </div>
                
            </div>
        </section>
        </Fade>
  );
}
