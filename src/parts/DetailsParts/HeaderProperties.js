import React from 'react';
import BreadcrumbParts from './BreadcrumbParts';
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse';

export default function HeaderProperties(props) {
    return (
        <Fade>

        <section className="container">
            <div className="row ">
                <Fade top>
                    <div className="col-4 ">
                        <BreadcrumbParts/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7">
                        <h4>{props.name}</h4>
                        <p style={{paddingLeft:'50px'}}>{props.city}, {props.country}</p>
                    </div>
                </Fade>
            </div>
            <div className="col">
                <Pulse>
                    <div className="container-grid mt-3">
                        {props.data.map((item, index)=>{
                            return(
                                <div 
                                    key={`item-details-${index}`}
                                    className={`item${index === 0 ? " column-7 row-2" : " column-5 row-1"}`}    
                                >
                                    {/* {console.log(index)}{console.log(item)} */}
                                    <div className="card card-feature" >
                                        <figure className="img-wrapper">
                                            <img src={item.url} alt={item._id} className="img-cover"/>
                                        </figure>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Pulse>
            </div>
        </section>
    </Fade>
    )
}
