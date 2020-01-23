import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
  state = {};
  loginStyle = {
    width: "35%",
    minHeight: "300px",
    margin: "0 auto",
    paddingTop: "5%"
  };

  // handle submit
  handleSubmit = event => {
    event.preventDefault();
    console.log("Submit button clicked");
  };

  formStyle = {};
  render() {
    return (
      <div className="cotainer">
        <div style={this.loginStyle}>
          <h2>Please Login</h2>
          <Form style={this.formStyle} onSubmit={this.handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formCheckBox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
