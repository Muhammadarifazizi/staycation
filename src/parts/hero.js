import React from 'react';

import ImageHero from '../assets/images/img_hero.png';
import FrameHero from '../assets/images/frame-img-hero.png';
import IconBag from '../assets/icons/ic_bag.svg';
import IconLocation from '../assets/icons/ic_city.svg';
import IconHotel from '../assets/icons/ic_hotle.svg';
import Button from 'smartComponent/Button';
import formatNumber from 'utils/formatNumber';

export default function Hero(props) {

    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior:"smooth"
        });
    }

    return (
        <section className="container mt-5" >
            <div className="row align-item-center">
                <div className="col-auto pr-5" style={{width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3"> 
                    Forget <span className="font-weight-lighter font-gray-200 ">Anxiety</span>,<br/> 
                    Find Your <span className="font-weight-bolder">Heavenly</span>
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75">We provide a perfect place, to joy your life with family and friends.</p>
                    <Button className="btn px-5" hasShadow isPrimary onclick={showMostPicked}>
                        Show Me Now
                    </Button>

                    <div className="row mt-5 " style={{marginTop:80}}>
                        <div className="col-auto" style={{marginRight:35}}>
                            <img src={IconBag} alt={`${props.data.travelers} Traavelers`} style={{width: 40}}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light"> travelers </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight:35}}>
                            <img src={IconHotel} alt={`${props.data.treasures} Hotels`} style={{width: 40}} />
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light"> hotels </span>
                            </h6>
                        </div>
                        <div className="col-auto" >
                            <img src={IconLocation} alt={`${props.data.cities} cities`} style={{width: 40}}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light" > cities </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-5 ">
                    <div style={{width:520, height:410}}>
                        <img src={ImageHero} alt="hero display" className="img-fluid position-absolute" style={{margin: '0 0 0 -30px', zIndex:1}}/>
                        <img src={FrameHero} alt="hero frame display" className="img-fluid position-absolute  rounded-lg" style={{margin: '25px 0 0 0'}} />
                    </div>
                </div>
            </div> 
        </section> 
    )
}
