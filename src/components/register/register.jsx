import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Joi from "joi-browser";

class Register extends Component {
  state = {
    register: { username: "", email: "", password: "", confirmPassword: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    email: Joi.string()
      .email()
      .max(256)
      .required()
      .label("Email"),
    password: Joi.string()
      .min(8)
      .required()
      .label("Password"),
    confirmPassword: Joi.string()
      .min(8)
      .required()
      .label("Confirm Password")
      .valid(Joi.ref("password"))
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
    const errors = this.joiValidate();
    if (errors) {
      this.setState({ errors });
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const register = { ...this.state.register };
    register[input.name] = input.value;
    this.setState({ register });
    // validateInput(input);
    const errors = {};
    const error = this.validateInputProperty(input);

    if (error) {
      errors[error.details[0].path[0]] = error.details[0].message;
    }
    this.setState({ errors });
  };

  // validate input property

  validateInputProperty = input => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };

    const result = Joi.validate(obj, schema);
    if (!result.error) return null;

    return result.error;
  };

  // validate
  joiValidate = () => {
    const result = Joi.validate(this.state.register, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
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
              {this.state.errors.username && (
                <Form.Text className="alert alert-danger">
                  {this.state.errors.username}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Enter email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
              />

              {this.state.errors.email && (
                <Form.Text className="alert alert-danger">
                  {this.state.errors.email}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />

              {this.state.errors.password && (
                <Form.Text className="alert alert-danger">
                  {this.state.errors.password}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" Confirm Password"
                name="confirmPassword"
                onChange={this.handleChange}
              />
              {this.state.errors.confirmPassword && (
                <Form.Text className="alert alert-danger">
                  {this.state.errors.confirmPassword}
                </Form.Text>
              )}
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
