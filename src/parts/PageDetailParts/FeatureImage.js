import React from 'react';
import Fade from 'react-reveal/Fade';

export default function FeatureImage({data}) {
    return (
        <section className="container">
            <div className="container-grid sm">
                {data.map((item, index)=>{
                    return(
                        <div 
                            key={`FeaturedImage-${index}`}
                            className={`item ${index>0 ? " column-5 row-1 mr-3": " column-7 row-2 ml-3"} `}
                        >
                            <Fade bottom delay={300*index}>
                                <div className="card h-100">
                                    <figure className="img-wrapper">
                                        <img src={item.url} alt={item._id} className="img-cover" />
                                    </figure>
                                </div>
                            </Fade>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
