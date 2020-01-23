import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Register extends Component {
  state = {
    register: { username: "", email: "", password: "", confirmPassword: "" },
    errors: {}
  };

  registerStyle = {
    width: "35%",
    minHeight: "300px",
    margin: "0 auto",
    paddingTop: "5%"
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("form submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const register = { ...this.state.register };
    register[input.name] = input.value;
    this.setState({ register });
    console.log("input element changed");
  };

  render() {
    return (
      <div className="cotainer">
        <div style={this.registerStyle}>
          <h2>Please Register</h2>
          <Form style={this.formStyle} onSubmit={this.handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Enter name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="username"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Enter email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" Confirm Password"
                name="confirmPassword"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCheckBox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;
