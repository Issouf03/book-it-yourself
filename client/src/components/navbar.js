import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { Nav, Navbar } from "react-bootstrap";

class NavigationBar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/api/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
            id: null,
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">Homepage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {loggedIn ? (
              <Nav.Item>
                <Nav.Link>
                  <Link to="#" onClick={this.logout}>
                    logout
                  </Link>
                </Nav.Link>
              </Nav.Item>
            ) : (
              <React.Fragment>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/login">login</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/signup">signup</Link>
                  </Nav.Link>
                </Nav.Item>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;