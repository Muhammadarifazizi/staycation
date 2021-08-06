import React, { Component } from 'react';

import Header from 'parts/Header';
import HeaderProperties from 'parts/DetailsParts/HeaderProperties';
import DetailsFeature from 'parts/DetailsParts/DetailsFeature';

import itemDetails from '../json/itemDetails.json';
import Activity from 'parts/DetailsParts/Activity';
import Footer from 'parts/Footer';
import Pesona from 'parts/DetailsParts/Pesona';

export default class Details extends Component {

    constructor(props){
        super(props);
        this.refDetails = React.createRef();
    }

    render() {
        return (
            <React.Fragment>
                <Header {...this.props}></Header>
                <HeaderProperties  data={itemDetails.imageUrls} name={itemDetails.name} country={itemDetails.country} city={itemDetails.city}/>
                <DetailsFeature redDetails={this.refDetails} desc={itemDetails.description} features={itemDetails.features} price={itemDetails.price}/>
                <Activity data={itemDetails.activities}/>
                <Pesona data={itemDetails.testimonial} city={itemDetails.city} country={itemDetails.country} name={itemDetails.name}/>
                <Footer></Footer>
            </React.Fragment>
            
        )
    }
}
