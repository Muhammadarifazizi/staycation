import React from "react";
import "assets/SCSS/style.scss";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from "pages/LandingPage";
// import Details from "pages/Details";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";


function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            {/* <Route exact path="/properties/asd1293uasdads1" component={Details}></Route> */}
            <Route exact path="/Checkout" component={Checkout}></Route>
            <Route exact path="/properties/:id" component={DetailsPage}></Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
