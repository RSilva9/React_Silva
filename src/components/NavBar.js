import React from 'react';
import CartWidget from './CartWidget';
import logo from '../img/logo.webp';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function RNavBar() {

  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/">
          <img src={logo}></img>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="#">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RNavBar;
