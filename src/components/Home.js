import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Row className="home-main">
          <Container className="home-cont0">
            <h2>Welcome</h2>
            <p className="para0">
              Find job, apply for job, explore candidates, hire candidates or
              get hired by the company
            </p>
            <p>What are you waiting for?</p>
            <p>Join us now :)</p>
            <ul>
              <li>
                <Link to="/Job Seeker">Job Seeker</Link>
              </li>
              <li>
                <Link to="/Company">Company</Link>
              </li>
            </ul>

            <Form className="home-form">
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Button variant="primary" type="submit">
                    SUBSCRIBE
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Container>
        </Row>

        <div>
          <Row className="home-row1">
            <Col sm={9} className="row1-col1">
              <div className="row1-col1-div">
                <h3 className="row1-col1-head">ABOUT US</h3>

                <p className="para1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas luctus nibh mollis ligula fringilla mattis. Nullam ac
                  neque fringilla, maximus eros a, facilisis turpis. Suspendisse
                  vel pulvinar nibh. In ut consectetur libero. Quisque sit amet
                  justo laoreet, sollicitudin velit at, imperdiet eros. Morbi
                  accumsan mi et sem molestie venenatis. Nullam non sapien id
                  nunc gravida tempor ac eget magna. Integer ullamcorper mattis
                  risus et mattis. Nam vel magna vehicula, cursus turpis ac,
                  dictum eros.
                </p>
              </div>
            </Col>

            <Col sm={3} className="image-wrapper">
              <Image src="images/work1.jpg" className="work1" />
            </Col>
          </Row>
        </div>

        <div>
          <Row className="home-row2">
            <Col sm={3} className="image-wrapper1">
              <Image src="images/work.jpg" className="work" />
            </Col>

            <Col sm={9} className="row2-col2">
              <h3 className="row2-col2-head">What organization gain?</h3>

              <p className="para2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas luctus nibh mollis ligula fringilla mattis. Nullam ac
                neque fringilla, maximus eros a, facilisis turpis. Suspendisse
                vel pulvinar nibh. In ut consectetur libero. Quisque sit amet
                justo laoreet, sollicitudin velit at, imperdiet eros. Morbi
                accumsan mi et sem molestie venenatis. Nullam non sapien id nunc
                gravida tempor ac eget magna. Integer ullamcorper mattis risus
                et mattis. Nam vel magna vehicula, cursus turpis ac, dictum
                eros.
              </p>
            </Col>
          </Row>
        </div>
        <div>
          <div>
            <Row className="home-row34">
              <Col sm={6}>
                <Image src="images/nature.jpg" className="row3-work" />
              </Col>

              <Col sm={6} className="row3-col2">
                <div className="row3-col2-div">
                  <h3 className="row3-col2-head">Why are we doing it?</h3>

                  <p className="para4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas luctus nibh mollis ligula fringilla mattis. Nullam
                    ac neque fringilla, maximus eros a, facilisis turpis.
                  </p>
                </div>
              </Col>

              <Col sm={6} className="row4-col1">
                <div className="row4-col1-div">
                  <h3 className="row4-col1-head">In a nutshell</h3>

                  <p className="para5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas luctus nibh mollis ligula fringilla mattis. Nullam
                    ac neque fringilla, maximus eros a, facilisis turpis.
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <Image src="images/nuts.jpg" className="row4-work" />
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <h4>Get In Touch</h4>

          <Row className="home-row5">
            <Container className="home-cont5">
              <Form className="home-form-row5">
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control className="home-formLabel" as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="4" />
                  </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </Container>
          </Row>
        </div>
      </div>
    );
  }
}
