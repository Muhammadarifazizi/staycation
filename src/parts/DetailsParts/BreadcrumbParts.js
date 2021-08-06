import React, { Component } from 'react';
import Breadcrumb from 'smartComponent/Breadcrumb';

export default class BreadcrumbParts extends Component {
    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: ""},
            { pageTitle: "House Details", pageHref: ""}
        ];

        return (
            <Breadcrumb data={breadcrumb}/>
        )
    }
}
