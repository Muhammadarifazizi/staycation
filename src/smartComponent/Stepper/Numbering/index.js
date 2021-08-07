/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import Fade from 'react-reveal/Fade';
import propTypes from "prop-types";
import "./index.scss";

export default function Numbering({style, className, data, current}) {
    
    const KeysOfData = Object.keys(data);

    return (
        <Fade>
            {/* setup condition stepper when it active or not */}
            <ol className={["stepper", className].join(" ")} style={style}>
                {KeysOfData.map((list, index)=>{
                    let isActive = list === current ? "active" : "";
                    if(index + 1 === KeysOfData.length){
                        isActive = "";
                        return null;
                    }

                    return(
                        // setup value stepper from 1
                        <li
                            key={`list-${index}`} 
                            className={[isActive].join(" ")}
                        >
                            {index+1}
                        </li>
                    )
                })}
            </ol>
        </Fade>
    )
}

Numbering.propTypes={
    className: propTypes.string,
    data: propTypes.object,
    current:propTypes.string
};