import React from 'react'
import Button from 'smartComponent/Button';


export default function MostPicked(props) {
    return (
        <section className="container" ref={props.refMostPicked}> 
            <h4 className="mb-4">Most Picked</h4>  
            <div className="container-grid">
                {props.data.map((item, index) =>{
                    return( 
                        // because we are using looping ro dispaly the item, we required to add property key
                        <div key={`mostpicked-${index}`} className={`item column-4${index === 0 ? " row-2" : " row-1"} `}> 
                            <div className="card card-featured">
                                <div className="tag">
                                    ${item.price}
                                    <span className="font-weight-light"> per {item.unit}</span>
                                </div>
                                <figure className="img-wrapper">
                                    <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                </figure>
                                <div className="meta-wrapper">
                                    <Button type="link" className=" stretched-link d-block text-white" href={`/properties/${item._id}`}>
                                        <h5>{item.name}</h5>
                                    </Button>
                                    <span>
                                        {item.city}, {item.country} 
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* <div className="item column-4 row-2">
                    <div className="card">Card 1</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">Card 2</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">Card 3</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">Card 2</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">Card 2</div>
                </div> */}
            </div>
        </section>
    )
}
