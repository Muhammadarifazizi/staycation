import React from 'react'
import Fade from 'react-reveal/Fade';
import CompleteIllustration from 'assets/images/successShape.png';

export default function Complete() {
    return (
        <Fade>
            <div className="container" style={{marginBottom:30}}>
                <div className="row justify-content-center text-center">
                    <div className="col-4">
                        <img 
                            src={CompleteIllustration} 
                            alt="complete checkout apartment" 
                            className="img-fluid" 
                        />
                        <p className="text-gray-500">
                            We will inform you via email later once the transaction has been accepted
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
