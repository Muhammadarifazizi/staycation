import React from 'react'

import propTypes from 'prop-types'
import './index.scss'
export default function Stars({className, value, height, width, spacing}) {

    // declaration functional component that will be return
    const decimals = Number(value) % 1
    const star = []
    let left_pose = 0
    
    // create full star
    for (let index = 0; index < 5 && index< value-decimals ; index++) {
        left_pose = left_pose+width
        star.push(
            <div className="star" 
                key={`star-${index}`} 
                style={{
                    left: index * width, 
                    height: height,  
                    width: width, 
                    marginRight: spacing
                }}
            ></div>
        );
    }
    // create rest star
    if(decimals > 0 && value <=5){
        star.push(
            <div className="star" 
                key={`starWithDecimal`} 
                style={{
                    left: left_pose, 
                    height: height,  
                    width: decimals * width - spacing
                }}
            ></div>
        );
    }
        
    const starPlaceholder =[]

    for (let index = 0; index < 5 ; index++) {
        starPlaceholder.push(
            <div className="star placeholder" 
                key={`starPlaceholder-${index}`} 
                style={{
                    left:index*width, 
                    height: height,  
                    width: width, 
                    marginRight: spacing
                }}
            ></div>
        );
    }

    // render
    return (
        <React.Fragment>
            <div className={['stars', className].join(" ")} style={{height: height}}>
                {starPlaceholder}
                {star}
            </div>            
        </React.Fragment>
    )
}

Stars.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number     
}