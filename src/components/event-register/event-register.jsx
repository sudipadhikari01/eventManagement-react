import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import "react-dropdown/style.css";
import $ from "jquery";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class RegisterEvent extends Component {
  state = {
    errors: {},
    input: {
      eventTitle: "",
      eventLocation: "",
      country: "",
      region: "",
      city: "",
      scheduleOption: null
    }
  };

  //   defaultOption = options[0];
  style = {
    dropdownItemSpan: { display: "block", marginBottom: "10px" },
    dropdownItemSelect: {
      display: "block",
      height: "40px",
      borderColor: "#efefef"
    }
  };

  //   .dropdown-item select{display: block; height: 40px; border-color: #efefef;}
  // handle change
  handleChange = ({ currentTarget: input }) => {
    const state = { ...this.state };
    state.input[input.name] = input.value;
    this.setState({ state });
  };
  //   handle online location
  handleOnlineLocation = () => {
    $("#locationButton").hide();
    const state = { ...this.state };

    const eventLocation = "This is an online event";
    state.input.eventLocation = eventLocation;
    this.setState({ state });
  };

  //   handle location
  handleLocation = () => {
    $("#locationButton").hide();
    $("#onlineButton").hide();
    $("#locationArea").show();
  };

  selectCountry = value => {
    const state = { ...this.state };
    state.input.country = value;
    this.setState({ state });
    console.log("selected country is " + this.state.input.country);
  };

  selectRegion = value => {
    const state = { ...this.state };
    state.input.region = value;
    this.setState({ state });
    console.log("selected region is " + this.state.input.region);
  };

  //   handle reset location button
  handleResetLocation = () => {
    $("#locationArea").hide();
    $("#locationButton").show();
    $("#onlineButton").show();
    const state = { ...this.state };
    state.input.country = "";
    state.input.region = "";
    state.input.city = "";
    this.setState({ state });
    const { country, region, city } = this.state.input;
    console.log(
      "country , region and city is " + country,
      " ",
      region,
      " ",
      city
    );
  };

  // handle submit
  handleSubmit = event => {
    event.preventDefault();
  };

  // component did mount
  componentDidMount() {
    $("#locationArea").hide();
  }

  // on schdule dropdown change
  onSchduleChange = event => {
    console.log("dropdown changed", event.value);

    let state = { ...this.state };
    state.input.scheduleOption = event.value;

    this.setState({ state });
    // this.setState({
    // const qa = { ...this.state.input, scheduleOption: event.value };
    // });
    // console.log("city", qa);

    console.log("selected item from state is", this.state.input.scheduleOption);
  };

  render() {
    const schduleOptions = [
      { value: "Daily", label: "Daily" },
      { value: "Weekly", label: "Weekly" },
      { value: "Monthly", label: "Monthly" },
      { value: "Annualy", label: "Annualy" }
    ];

    return (
      <div>
        <h3 style={{ textAlign: "center", marginTop: "15px" }}>
          Enter Details To Register an Event
        </h3>
        <div className="container">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="eventTitle">
              <h5>1.Event Details</h5>
              <Form.Label>Event Title*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Give it a short distinct name"
                name="eventTitle"
                onChange={this.handleChange}
                value={this.state.input.eventTitle}
              />
            </Form.Group>

            <Form.Group controlId="eventLocation">
              <Form.Label>Event Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Give location where it is happening"
                name="eventLocation"
                onChange={this.handleChange}
                value={this.state.input.eventLocation}
              />
            </Form.Group>

            <Button
              id="onlineButton"
              variant="outline-primary"
              type="submit"
              onClick={this.handleOnlineLocation}
            >
              Online Event
            </Button>

            <Button
              id="locationButton"
              variant="outline-secondary"
              type="submit"
              style={{ marginLeft: "10px" }}
              onClick={this.handleLocation}
            >
              Enter Address
            </Button>
            {/* location area started */}
            <div
              className="locationArea"
              id="locationArea"
              style={{ marginTop: "10px" }}
            >
              <div className="row">
                <div className="col-md-6">
                  <span>Please select a country</span>
                  <CountryDropdown
                    style={this.style.dropdownItemSelect}
                    value={this.state.input.country}
                    onChange={value => this.selectCountry(value)}
                  />
                </div>
                <div className="col-md-6">
                  <span>Please select a region</span>
                  <RegionDropdown
                    style={this.style.dropdownItemSelect}
                    country={this.state.input.country}
                    value={this.state.input.region}
                    onChange={value => this.selectRegion(value)}
                  />
                </div>
              </div>
              <Form.Group controlId="eventCity" style={{ marginTop: "10px" }}>
                <Form.Label>Event City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={this.handleChange}
                  value={this.state.input.city}
                />
              </Form.Group>
              <Button
                id="resetLocationButton"
                variant="primary"
                type="submit"
                style={{ marginLeft: "10px" }}
                onClick={this.handleResetLocation}
              >
                Reset Location
              </Button>
            </div>
            {/* end of location div */}

            {/* schedule area started */}
            <div className="scheduleArea" style={{ marginTop: "20px" }}>
              <h5>2. Schedule Dates</h5>
              <div className="row" style={{ backgroundColor: "" }}>
                <div className="col-md-6">
                  <span>How often does this event occurs?</span>
                  <Dropdown
                    options={schduleOptions}
                    onChange={this.onSchduleChange}
                    value={this.state.input.scheduleOption}
                    placeholder="Select an option"
                  />
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default RegisterEvent;
