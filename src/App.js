import React from "react";
import "assets/SCSS/style.scss";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from "pages/LandingPage";
import Details from "pages/Details";
// import PickDate from "parts/DetailsParts/PickDate";
// import BreadcrumbParts from "parts/DetailsParts/BreadcrumbParts";

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/properties/asd1293uasdads1" component={Details}></Route>
            {/* <Route exact path="/pick-date" component={PickDate}></Route>
            <Route exact path="/breadcrumb" component={BreadcrumbParts}></Route> */}
          </Switch>
        </Router>
      </div>
  );
}

export default App;
