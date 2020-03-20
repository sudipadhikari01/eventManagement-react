import React, { Component } from "react";
import BackgroundImage from "./images/event-background.jpg";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

class LatestEvent extends Component {
  state = {
    events: []
  };
  style = {
    backgroundStyle: {
      width: "100%",
      height: "400px",
      backgroundImage: `url(${BackgroundImage})`
    },
    latestEventStyle: {
      marginTop: "10px",
      headingStyle: { textAlign: "center" }
    }
  };

  componentDidMount = async () => {
    console.log("a");
    await axios
      .get("http://localhost:8080/api/event-registration")
      .then(response => {
        if (response.data.status === "success") {
          console.log("response is ", response.data);
          this.setState({ events: response.data.data });
        }

        console.log("events is ", this.state.events);
        console.log(this.state.events[0].eventImage);
      })
      .catch(error => {
        console.log("error:", error);
      });
  };

  handleClick = event => {
    console.log("handle test clicked");
    console.log("handle click", this.state.events[0].eventImage);
  };

  // handle click
  handleClick = async () => {
    console.log("handcle button clicked");
    await axios.get("");
  };

  render() {
    const test = this.state.events || [];
    // console.log(this.state.events[0] || {}, "terst2");
    console.log("from renderer test ", test.eventTitle);
    return (
      <div>
        <div style={this.style.backgroundStyle}></div>
        <div
          className="container latestEvent"
          style={this.style.latestEventStyle}
        >
          <h2 style={this.style.latestEventStyle.headingStyle}>
            Latest Events
          </h2>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-4 col-sm-4">
              <Card>
                {test.length > 0 && (
                  <Card.Img
                    variant="top"
                    src={`${this.state.events[0].eventImage}`}
                  />
                )}
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-4">
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-4">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestEvent;

//
