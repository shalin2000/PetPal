import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Components/Profile";
import PetInfo from "./Components/PetInfo";
import Reminders from "./Components/Reminders";
import SelectedCatInfo from "./Components/SelectedCatInfo";
import FAQ from "./Components/FAQ";
import SearchMap from "./Components/SearchMap";
import SelectedDogInfo from "./Components/SelectedDogInfo";
import SelectedFishInfo from "./Components/SelectedFishInfo";
import SelectedBirdInfo from "./Components/SelectedBirdInfo";
import SelectedRabbitInfo from "./Components/SelectedRabbitInfo";
import SelectedSnakeInfo from "./Components/SelectedSnakeInfo";

class RoutePath extends Component {
    
  render(){
    return (
      <Router>
        <Switch>
          {/* default/home page. */}
          <Route exact path="/" component={Profile} />
          <Route exact path="/petInfo" component={PetInfo} />
          <Route exact path="/reminders" component={Reminders} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/searchMap" component={SearchMap} />

          <Route exact path="/selectedCatInfo" component={SelectedCatInfo} />
          <Route exact path="/selectedDogInfo" component={SelectedDogInfo} />
          <Route exact path="/selectedFishInfo" component={SelectedFishInfo} />
          <Route exact path="/selectedBirdInfo" component={SelectedBirdInfo} />
          <Route exact path="/selectedRabbitInfo" component={SelectedRabbitInfo} />
          <Route exact path="/selectedSnakeInfo" component={SelectedSnakeInfo} />

        </Switch>
      </Router>
    )
  }
}

export default RoutePath;