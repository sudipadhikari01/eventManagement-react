import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Joi from "joi-browser";
import axios from "axios";

class Login extends Component {
  state = {
    user: { email: "", password: "" },
    errors: {},
    data: { _id: "", name: "", status: "" }
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .min(8)
      .required()
      .label("Password")
  };

  // validate submit

  validate = () => {
    const result = Joi.validate(this.state.user, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  // validate input property

  validateInputProperty = input => {
    const scheme = { [input.name]: this.schema[input.name] };
    const obj = { [input.name]: input.value };

    const result = Joi.validate(obj, scheme);
    if (!result.error) return null;

    return result.error;
  };

  // login style
  loginStyle = {
    width: "35%",
    minHeight: "300px",
    margin: "0 auto",
    paddingTop: "5%"
  };

  // handle submit
  handleSubmit = async event => {
    event.preventDefault();
    const errors = this.validate();

    if (errors) {
      this.setState({ errors });
    } else {
      const loginPost = {
        email: this.state.user.email,
        password: this.state.user.password
      };
      await axios
        .post("http://localhost:8080/api/login", loginPost)
        .then(response => {
          console.log("the response is " + response.data.status);
          const data = { ...this.state.data };
          data.status = response.data.status;
          data._id = response.data.data._id;
          data.name = response.data.data.name;
          this.setState({ data });
          sessionStorage.setItem("id", response.data.data[0]._id);
          console.log("the state data is " + response.data.data[0]._id);
        })
        .catch(error => {
          console.log("error connecting tha api " + error);
        });

      if (this.state.data.status === "success") {
        this.props.history.push("/index");
      }
    }
    console.log("Submit button clicked");
  };

  // handle change
  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    console.log("handle change called");
    user[input.name] = input.value;
    this.setState({ user });
    const errors = {};
    const error = this.validateInputProperty(input);
    if (error) {
      errors[error.details[0].path[0]] = error.details[0].message;
    }
    this.setState({ errors });
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
                value={this.state.user.email}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
                value={this.state.user.password}
                onChange={this.handleChange}
              />

              {this.state.errors.password && (
                <Form.Text className="alert alert-danger">
                  {this.state.errors.password}
                </Form.Text>
              )}
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
