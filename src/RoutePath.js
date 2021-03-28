import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Components/Profile";
import PetInfo from "./Components/PetInfo";
import Reminders from "./Components/Reminders";
import SelectedPetInfo from "./Components/SelectedPetInfo";
import FAQ from "./Components/FAQ";
import SearchMap from "./Components/SearchMap";

class RoutePath extends Component {
    
  render(){
    return (
      <Router>
        <Switch>
          {/* default/home page. */}
          <Route exact path="/" component={Profile} />
          <Route exact path="/petInfo" component={PetInfo} />
          <Route exact path="/reminders" component={Reminders} />
          <Route exact path="/selectedPetInfo" component={SelectedPetInfo} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/searchMap" component={SearchMap} />
        </Switch>
      </Router>
    )
  }
}

export default RoutePath;