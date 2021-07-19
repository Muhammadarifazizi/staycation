import React, { Component } from 'react';
import Header from 'parts/Header';
import Hero from 'parts/hero';
// dumy data for frontend
import landingPage from 'json/landingPage.json';



export default class LandingPage extends Component {
    render(){
        return(<React.Fragment>
            {/* passing all props taht already have into header */}
                <Header {...this.props}></Header>
                <Hero data={landingPage.hero}/>
            </React.Fragment>
        );
    }
};

