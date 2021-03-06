import React from 'react';
import Fade from 'react-reveal/Fade';
import "assets/SCSS/style.scss";
export default function Meta({data, current}) {
    return (
        <Fade delay={300}>
            <div className="test-content container" style={{marginBottom:30, textAlign:"center"}}>
                <h1 className="h2">{data[current].title}</h1>
                <p className="lead text-gray-500">
                    {data[current] && data[current].description}
                </p>
            </div>
        </Fade>
    )
}
