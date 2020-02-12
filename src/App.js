import React, { Component } from "react";
import NavBarComponent from "./components/navbar/navbar";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import LoginComponent from "./components/login/login";
import PageNotFoundComponent from "./components/page-not-found/page-not-found";
import RegisterComponent from "./components/register/register";
import HomeComponent from "./components/home/home";
import IndexComponent from "./components/index/index";
import LatestEventComponent from "./components/latest-event/latest-event";
import RegisterEventComponent from "./components/event-register/event-register";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBarComponent />
          <Switch>
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/register" component={RegisterComponent}></Route>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/index" component={IndexComponent} />
            <Route path="/latest-event" component={LatestEventComponent} />
            <Route path="/event-register" component={RegisterEventComponent} />
            <Route path="/not-found" component={PageNotFoundComponent} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
