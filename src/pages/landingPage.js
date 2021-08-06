import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/LandingPagePart/MostPicked';
import Categories from 'parts/LandingPagePart/Categories';
import Testimony from 'parts/LandingPagePart/Testimony';
import Footer from 'parts/Footer';

// dumy data for frontend
import landingPage from 'json/landingPage.json';

export default class LandingPage extends Component {

    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    render(){
        return(
            <React.Fragment>
            {/* passing all props taht already have into header */}
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked}  data={landingPage.hero}/>
                <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
                <Categories data={landingPage.categories}/>
                <Testimony data={landingPage.testimonial}/>
                <Footer/>
            </React.Fragment>
        );
    }
};

