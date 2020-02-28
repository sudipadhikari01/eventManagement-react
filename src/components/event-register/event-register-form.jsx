import React, { Component } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import "react-dropdown/style.css";
import $ from "jquery";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";

import {
  eventFromOptions,
  schduleOptions,
  eventTypeOptions,
  topicOptions
} from "./dropdownOption";
import CKEditor from "ckeditor4-react";

class EventRegisterForm extends Component {
  state = {
    errors: {},
    data: {},
    input: {
      eventTitle: "",
      eventLocation: "",
      country: "",
      region: "",
      city: "",
      scheduleOption: null,
      eventDate: "",
      eventFrom: null,
      eventTo: null,
      eventImage: "",
      eventDescription: "",
      organizerName: "",
      organizerDescription: "",
      ticketType: null,
      ticketName: "",
      ticketQuantity: "",
      ticketPrice: "",
      ticketDescription: "",
      ticketSalesStartDate: "",
      ticketSalesStartTime: "",
      ticketSalesEndtDate: "",
      ticketSalesEndTime: "",
      eventType: null,
      eventTopic: null
    },
    imageName: null
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
    const {
      eventTitle,
      eventLocation,
      country,
      region,
      city,
      scheduleOption,
      eventDate,
      eventFrom
    } = this.state.input;

    console.log(
      "eventitle,event location ,country, region ,city" +
        eventTitle +
        eventLocation +
        country +
        region +
        city +
        scheduleOption +
        eventDate +
        eventFrom
    );
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

  // select country on dropdown
  selectCountry = value => {
    const state = { ...this.state };
    state.input.country = value;
    this.setState({ state });
    console.log("selected country is " + this.state.input.country);
  };

  // select region on drop down
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
    state.input.eventLocation = "";
    state.input.country = "";
    state.input.region = "";
    state.input.city = "";
    this.setState({ state });
  };

  // handle submit
  handleSubmit = event => {
    event.preventDefault();
  };

  // component did mount
  componentDidMount() {
    $("#locationArea").hide();
    $("#ticketDescriptionArea").hide();
  }

  // on schdule dropdown change
  onSchduleChange = event => {
    let state = { ...this.state };
    state.input.scheduleOption = event.value;
    this.setState({ state });
    console.log("selected item from state is", this.state.input.scheduleOption);
  };

  // on event from dropdown change
  onEventFromChange = event => {
    const state = { ...this.state };
    state.input.eventFrom = event.value;
    this.setState({ state });
  };

  // on event to dropdown change
  onEventToChange = event => {
    const state = { ...this.state };
    state.input.eventTo = event.value;
    this.setState({ state });
  };

  // handling event image

  handleEventImge = event => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);

      const state = { ...this.state };
      state.input.eventImage = event.target.files[0];
      this.setState({ state });
      console.log("State:" + this.state.input.eventImage);
      const fd = new FormData();
      const { eventImage } = this.state.input;
      if (eventImage) {
        fd.append("eventImage", eventImage, eventImage.name);
        axios
          .post("http://localhost:8080/api/event-registration/image", fd)
          .then(response => {
            if (response.data.status === "success") {
              this.setState({ imageName: response.data.data });
            }
          });
      }
    }
  };

  // handling event description from  ckeditor
  handleEventDescription = event => {
    const state = { ...this.state };
    state.input.eventDescription = event.editor.getData();
    this.setState({ state });
  };

  // handle organizer descripting from ckeditor
  handleorganizerDescription = event => {
    const state = { ...this.state };
    state.input.organizerDescription = event.editor.getData();
    this.setState({ state });
  };

  // handle free ticket
  handleFreeTicket = () => {
    $("#ticketDescriptionArea").show();
    $("#ticketPrice").val("Free");
    const state = { ...this.state };
    state.input.ticketType = "Free Ticket";
    state.input.ticketPrice = "Free";
    this.setState({ state });
  };

  // handle paid ticket
  handlePaidTicket = () => {
    $("#ticketDescriptionArea").show();
    $("#ticketPrice").val("$");
    const state = { ...this.state };
    state.input.ticketType = "Paid Ticket";
    state.input.ticketPrice = "$";
    this.setState({ state });
  };
  // handle donation ticket
  handleDonationTicket = () => {
    $("#ticketPrice").val("Donation");
    $("#ticketDescriptionArea").show();
    const state = { ...this.state };
    state.input.ticketType = "Donation Ticket";
    state.input.ticketPrice = "Donation";
    this.setState({ state });
  };

  // on change ticket sales start time
  onTicketSalesStartTimeChange = event => {
    const state = { ...this.state };
    state.input.ticketSalesStartTime = event.value;
    this.setState({ state });
  };

  // on change ticket sales end time
  onTicketSalesEndtTimeChange = event => {
    const state = { ...this.state };
    state.input.ticketSalesEndTime = event.value;
    this.setState({ state });
  };

  // on event type change
  onEventTypeChange = event => {
    const state = { ...this.state };
    state.input.eventType = event.value;
    this.setState({ state });
  };

  // on event topic change
  onEvenTopicChange = event => {
    const state = { ...this.state };
    state.input.eventTopic = event.value;
    this.setState({ state });
  };

  //   handle form submit
  handleFormSubmit = async event => {
    event.preventDefault();

    var {
      eventTitle,
      eventLocation,
      country,
      region,
      city,
      scheduleOption,
      eventDate,
      eventFrom,
      eventTo,
      eventDescription,
      organizerName,
      organizerDescription,
      ticketType,
      ticketName,
      ticketPrice,
      ticketDescription,
      ticketSalesStartTime,
      ticketSalesStartDate,
      ticketSalesEndTime,
      ticketSalesEndtDate,
      eventType,
      eventTopic
    } = this.state.input;

    if (eventLocation === "This is an online event") {
      country = "";
      region = "";
    }

    var eventImage = this.state.imageName;
    console.log("event image is0" + eventImage);

    var data = {
      eventTitle,
      eventLocation,
      country,
      region,
      city,
      scheduleOption,
      eventDate,
      eventFrom,
      eventTo,
      eventImage,
      eventDescription,
      organizerName,
      organizerDescription,
      ticketType,
      ticketName,
      ticketPrice,
      ticketDescription,
      ticketSalesStartTime,
      ticketSalesStartDate,
      ticketSalesEndTime,
      ticketSalesEndtDate,
      eventType,
      eventTopic
    };

    await axios
      .post("http://localhost:8080/api/event-registration", data)
      .then(response => {
        console.log("response from server is ", response.data);
        const data = response.data;
        this.setState({ data });
        console.log(response.data);
        console.log(this.state.data.message);
      });
    if (this.state.data.message === "Event registered successfully") {
      console.log("inside if");
      // this.props.history.push("/home");
    }

    // console.log("form data is ", formData);
  };

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center", marginTop: "15px" }}>
          Enter Details To Register an Event
        </h3>
        <div className="container">
          <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
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
              <Form.Group controlId="city" style={{ marginTop: "10px" }}>
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
            <Jumbotron fluid style={{ marginTop: "20px", padding: "10px" }}>
              <div className="scheduleArea">
                <h5>2. Schedule Dates</h5>
                <div className="row" style={{ backgroundColor: "" }}>
                  <div className="col-md-6">
                    <span>How often does this event occurs?</span>
                    <Dropdown
                      options={schduleOptions}
                      onChange={this.onSchduleChange}
                      value={this.state.input.scheduleOption}
                      placeholder="Select a Schedules"
                    />
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="eventDate">
                      <Form.Label>Select event date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Give location where it is happening"
                        name="eventDate"
                        onChange={this.handleChange}
                        value={this.state.input.eventDate}
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <span>From*</span>
                    <Dropdown
                      options={eventFromOptions}
                      onChange={this.onEventFromChange}
                      value={this.state.input.eventFrom}
                      placeholder="From"
                    />
                  </div>
                  <div className="col-md-6">
                    <span>To*</span>
                    <Dropdown
                      options={eventFromOptions}
                      onChange={this.onEventToChange}
                      value={this.state.input.eventTo}
                      placeholder="To"
                    />
                  </div>
                </div>

                <div className="row" style={{ padding: "20px" }}>
                  <Form.Group controlId="eventImage">
                    <Form.Label>Select event imge</Form.Label>
                    <Form.Control
                      accept="image/*"
                      type="file"
                      className="filetype"
                      name="eventImage"
                      onChange={this.handleEventImge}
                    />
                  </Form.Group>
                </div>
              </div>
            </Jumbotron>
            {/* ck editor  */}
            <h4>3. Event Description</h4>
            <div className="eventDescriptionArea">
              <div className="row" style={{ padding: "10px" }}>
                <div className="col-md-12">
                  <CKEditor
                    onBeforeLoad={CKEDITOR =>
                      (CKEDITOR.disableAutoInline = true)
                    }
                    data={this.state.input.eventDescription}
                    type="classic"
                    onChange={this.handleEventDescription}
                  ></CKEditor>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <Form.Group controlId="organizerName">
                    <Form.Label>Enter organizer name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="organizer  name"
                      name="organizerName"
                      onChange={this.handleChange}
                      value={this.state.input.organizerName}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row" style={{ padding: "10px" }}>
                <label>Organizer Description</label>
                <div className="col-md-12">
                  <CKEditor
                    onBeforeLoad={CKEDITOR =>
                      (CKEDITOR.disableAutoInline = true)
                    }
                    data={this.state.input.organizerDescription}
                    type="classic"
                    onChange={this.handleorganizerDescription}
                  ></CKEditor>
                </div>
              </div>
            </div>

            <div
              className="ticketArea"
              style={{ marginTop: "20px" }}
              id="ticketArea"
            >
              <h6 style={{ width: "50%", margin: "0 auto" }}>
                What type of ticket would you like to choose?
              </h6>
              <div className="row" style={{ width: "50%", margin: "0 auto" }}>
                <Button
                  id="freeTicket"
                  variant="outline-secondary"
                  type="submit"
                  style={{ margin: "5px", padding: "5px" }}
                  onClick={this.handleFreeTicket}
                >
                  Free Ticket
                </Button>

                <Button
                  id="paidTicket"
                  variant="outline-secondary"
                  type="submit"
                  style={{ margin: "5px", padding: "5px" }}
                  onClick={this.handlePaidTicket}
                >
                  Paid Ticket
                </Button>

                <Button
                  id="donationTicket"
                  variant="outline-secondary"
                  type="submit"
                  style={{ margin: "5px", padding: "5px" }}
                  onClick={this.handleDonationTicket}
                >
                  Donation
                </Button>
              </div>
              {/* free ticket area */}
              <div
                className="ticketDescriptionArea"
                style={{ marginTop: "15px" }}
                id="ticketDescriptionArea"
              >
                <div className="row">
                  <div className="col-md-4">
                    <Form.Group controlId="ticketName">
                      <Form.Label>Give ticket name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Give ticket name"
                        name="ticketName"
                        onChange={this.handleChange}
                        value={this.state.input.ticketName}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group controlId="ticketQuantity">
                      <Form.Label>Give ticket quantity</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Give ticket quantity"
                        name="ticketQuantity"
                        onChange={this.handleChange}
                        value={this.state.input.ticketQuantity}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group controlId="ticketPrice">
                      <Form.Label>Give ticket price</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Give ticket quantity"
                        name="ticketPrice"
                        onChange={this.handleChange}
                        value={this.state.input.ticketPrice}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10">
                    <Form.Group controlId="ticketDescription">
                      <Form.Label>Give ticket description</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Give ticket description"
                        name="ticketDescription"
                        onChange={this.handleChange}
                        value={this.state.input.ticketDescription}
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Form.Group controlId="ticketSalesStartDate">
                      <Form.Label>Ticket sales start date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Give ticket description"
                        name="ticketSalesStartDate"
                        onChange={this.handleChange}
                        value={this.state.input.ticketSalesStartDate}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <span>Ticket sales start time</span>
                    <Dropdown
                      options={eventFromOptions}
                      onChange={this.onTicketSalesStartTimeChange}
                      value={this.state.input.ticketSalesStartTime}
                      placeholder="Sales ticket start time "
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Form.Group controlId="ticketSalesEndtDate">
                      <Form.Label>Ticket sales end date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Give ticket description"
                        name="ticketSalesEndtDate"
                        onChange={this.handleChange}
                        value={this.state.input.ticketSalesEndtDate}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <span>Ticket sales end time</span>
                    <Dropdown
                      options={eventFromOptions}
                      onChange={this.onTicketSalesEndtTimeChange}
                      value={this.state.input.ticketSalesEndTime}
                      placeholder="Sales ticket end time "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="additionalSettingArea"
              style={{ marginTop: "15px" }}
            >
              <h4>4. Additional Setting</h4>
              <div className="row">
                <div className="col-md-6">
                  <span>Select Event Type</span>
                  <Dropdown
                    options={eventTypeOptions}
                    onChange={this.onEventTypeChange}
                    value={this.state.input.eventType}
                    placeholder="Select event type "
                  />
                </div>
                <div className="col-md-6">
                  <span>Select Event Topic</span>
                  <Dropdown
                    options={topicOptions}
                    onChange={this.onEvenTopicChange}
                    value={this.state.input.eventTopic}
                    placeholder="Select event topic "
                  />
                </div>
              </div>
            </div>
            {/* image */}
            {/* <div className="image">
              {this.state.input.eventImage && (
                <input
                  type="image"
                  src={this.state.input.eventImage.name}
                  alt="image"
                />
              )}
            </div> */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Button
                id="submitButton"
                variant="primary"
                type="submit"
                onClick={this.handleFormSubmit}
              >
                Register Event
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default EventRegisterForm;

// let formdata = new FormData(); formdata.append('imageKoKey', imagefile) formdata.append('eventTitle', 'Geda Show')
