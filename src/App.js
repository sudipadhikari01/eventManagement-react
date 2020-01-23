import React, { Component } from "react";
import NavBarComponent from "./components/navbar/navbar";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import LoginComponent from "./components/login/login";
import PageNotFoundComponent from "./components/page-not-found/page-not-found";
import RegisterComponent from "./components/register/register";

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
            <Route exact path="/" component="" />
            <Route path="/not-found" component={PageNotFoundComponent} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
