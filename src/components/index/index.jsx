import React, { Component } from "react";

class Index extends Component {
  state = {};
  render() {
    return <h1>Login Successfull {sessionStorage.getItem("id")}</h1>;
  }
}

export default Index;
