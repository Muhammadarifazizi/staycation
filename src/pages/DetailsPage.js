import React, { Component } from 'react'

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailParts/PageDetailTitle';
import ItemDetails from '../json/itemDetails.json';
import FeatureImage from 'parts/PageDetailParts/FeatureImage';
import DetailDescription from 'parts/PageDetailParts/DetailDescription';
import BookingForm from 'parts/PageDetailParts/BookingForm';
import Activity from 'parts/DetailsParts/Activity';
import Pesona from 'parts/DetailsParts/Pesona';
import Footer from 'parts/Footer';


export default class DetailsPage extends Component {
    
    componentDidMount(){
        window.title =" Details Page";
        window.scrollTo(0, 0);
    }
    
    render() {
        const breadcrumb =[
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "House Details", pageHref:""}
        ];
        return (
            <>
                <Header {...this.props}/>
                <PageDetailTitle data={ItemDetails} breadcrumb={breadcrumb}/>
                <FeatureImage data={ItemDetails.imageUrls}/>
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <DetailDescription data={ItemDetails} />
                        </div>
                        <div className="col-5">
                            <BookingForm itemDetails={ItemDetails} />
                        </div>
                    </div>
                </section>
                <Activity data={ItemDetails.activities} />
                <Pesona data={ItemDetails.testimonial} city={ItemDetails.city} country={ItemDetails.country} name={ItemDetails.name} />
                <Footer/>
            </>
        )
    }
}
