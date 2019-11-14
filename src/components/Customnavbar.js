import React, { Component } from "react";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Customnavbar.css";

export default class Customnavbar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand>
            <NavItem className="logo">
              <Link to="/">Talen-Pit</Link>
            </NavItem>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <ul className="navbar">
                <li>
                  <Link exact to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>

                <Button>Sign in</Button>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
