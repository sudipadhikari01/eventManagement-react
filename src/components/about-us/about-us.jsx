import React, { Component } from "react";
import BackgroundImage from "./images/about-us.png";
import GoogleMapReact from "google-map-react";
import { Form, Jumbotron, Button } from "react-bootstrap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class AboutUs extends Component {
  state = {};

  style = {
    backgroundStyle: {
      width: "100%",
      height: "450px",
      backgroundImage: `url(${BackgroundImage})`
    },
    mapStyle: {
      width: "100%",
      height: "100%"
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="backgrounImge" style={this.style.backgroundStyle}></div>
        <div className="aboutUsContent" style={{ marginTop: "20px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  dolores quisquam consequatur nisi voluptate tempore, modi
                  blanditiis ab, voluptas neque excepturi unde? Voluptates, iste
                  doloremque! Enim nihil perferendis animi quas?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  dolores quisquam consequatur nisi voluptate tempore, modi
                  blanditiis ab, voluptas neque excepturi unde? Voluptates, iste
                  doloremque! Enim nihil perferendis animi quas?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  dolores quisquam consequatur nisi voluptate tempore, modi
                  blanditiis ab, voluptas neque excepturi unde? Voluptates, iste
                  doloremque! Enim nihil perferendis animi quas?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  dolores quisquam consequatur nisi voluptate tempore, modi
                  blanditiis ab, voluptas neque excepturi unde? Voluptates, iste
                  doloremque! Enim nihil perferendis animi quas?
                </p>
              </div>
            </div>

            <div className="getIntouchArea" style={{ marginTop: "25px" }}>
              <div className="row">
                <div className="col-md-6">
                  <Jumbotron>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="name">
                        <h5>Get in touch</h5>
                        <Form.Label>Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          onChange={this.handleChange}
                        />
                      </Form.Group>

                      <Form.Group controlId="phone">
                        <Form.Label>Phone/Mobile</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Phone/Mobile"
                          name="phone"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Address"
                          name="address"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="phone">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Subject"
                          name="subject"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="phone">
                        <Form.Label>Message</Form.Label>
                        <textarea
                          onChange={this.handleChange}
                          name="message"
                          className="form-control"
                          id="message"
                          rows="5"
                        />
                      </Form.Group>
                      <Button
                        id="getIntouchButton"
                        variant="primary"
                        type="submit"
                      >
                        Get In Touch{" "}
                      </Button>
                    </Form>
                  </Jumbotron>
                </div>

                <div className="col-md-6">
                  <GoogleMapReact
                    defaultCenter={{ lat: 27.7309, lng: 85.2955 }}
                    defaultZoom={12}
                    style={this.style.mapStyle}
                  >
                    <AnyReactComponent
                      lat={27.7309}
                      lng={85.2955}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact info area */}
        <div className="contactInfoArea" style={{ marginTop: "20px" }}>
          <div
            className="row"
            style={{
              backgroundColor: "#87CEFA",
              color: "black"
            }}
          >
            <div style={{ marginLeft: "80px" }}>
              <h5>Contact Info</h5>
              <span style={{ display: "block" }}>
                "To make your event the next benchmark"
              </span>
              <div style={{ display: "block" }}>
                <i className="fa fa-phone fa-phone"></i>
                <span style={{ marginLeft: "10px" }}>Phone:</span>
                <span style={{ marginLeft: "5px" }}>9845806753</span>
              </div>

              <div>
                <i class="fa fa-address-card"></i>
                <span style={{ marginLeft: "10px" }}>Address:</span>
                <span style={{ marginLeft: "5px" }}>Kathmandu,Nepal</span>
              </div>
              <div>
                <i class="fa fa-envelope-square"></i>
                <span style={{ marginLeft: "10px" }}>Email:</span>
                <span style={{ marginLeft: "5px" }}>
                  sudip.adhikari01@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
