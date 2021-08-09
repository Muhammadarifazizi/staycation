/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Fade from 'react-reveal/Fade';

export default function DetailDescription({data}) {
    return (
        <Fade>
            <main className="ml-3">
                <Fade top cascade >
                    <h4>About the Place</h4>
                    {ReactHtmlParser(data.description)}
                </Fade>
                <div className="row" style={{marginTop:30}}>
                    {data.features.map((feature, index)=>{
                        return(
                            <Fade right cascade>
                            <div
                                key={`feature-${index}`}
                                className="col-3"
                                style={{marginBottom:20}}
                            >
                                <img 
                                    width={`${feature.name === "refrigerator" ? 25 : 38 } `}
                                    className="d-block mb-2"
                                    src={feature.imageUrl}
                                    alt={feature.name}
                                />{" "}
                                <span>{feature.qty}</span>{" "}
                                <span className="text-gray-500 font-weight-light">
                                    {feature.name}
                                </span>
                            </div>
                            </Fade>
                        );
                    })}
                </div>
            </main>
        </Fade>
    )
}
