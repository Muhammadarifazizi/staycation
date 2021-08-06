import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Activity(props) {
    
    return (
        <Fade >
            <section className="container">
                <div className="col">
                    <Fade right>
                        <h4 className="h6 mb-4">Activity</h4>
                    </Fade >
                    <div className="container-grid">
                        {props.data.map((item, index) =>{
                            return(
                                <div className="item column-3" key={`activity-${index}`}>
                                    <Fade right delay={600*index}>
                                    <div className="card card-feature">
                                        <figure className="img-wrapper">
                                            <img src={item.imageUrl} alt={item._id} className="img-cover" />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <p>{item.name} <br/><span>{item.type}</span></p>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            ); 
                        })}
                    </div>
                </div>
            </section>
        </Fade>
    )
}
