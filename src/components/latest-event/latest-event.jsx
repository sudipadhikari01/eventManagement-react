import React, { Component } from "react";
import BackgroundImage from "./images/event-background.jpg";
import { Card, Button } from "react-bootstrap";

class LatestEvent extends Component {
  state = {};
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
  render() {
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

          <div className="row">
            <div className="col-md-4">
              <Card style={{ width: "18rem" }}>
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

            <div className="col-md-4">
              <Card style={{ width: "18rem" }}>
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

            <div className="col-md-4">
              <Card style={{ width: "18rem" }}>
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
