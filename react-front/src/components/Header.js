import React, { Component } from 'react';
import '../styles/Header.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


class Header extends Component {
  render() {
    return (
        <div className="Header">
          <Container>
            <Row className="p-3">
              <Col lg="3">
                <NavLink to="/" className="logo">Movie App</NavLink>
              </Col>
            
              <Col lg="2" className="links-nav">
                <NavLink to="/" exact activeStyle={{color: "#0bceaf"}}>Home</NavLink>
              </Col>

              <Col lg="2" className="links-nav">
                <NavLink to="/add-movie" exact activeStyle={{color: "#0bceaf"}}>Add movie</NavLink>
              </Col>
            </Row>
          </Container>
        </div>

    )
  }
}

export default Header;