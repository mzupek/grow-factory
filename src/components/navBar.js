import React from "react"
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import icon from '../../content/assets/grow_factory_icon.png';
const NavBar = () => {
  return (
    <Navbar variant="light" style={{ height: 100 }}>
    <Navbar.Brand href="/">
    <img
        alt=""
        src={icon}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    GROW FACTORY</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/blog">Grow</Nav.Link>
        <Nav.Link href="/">Feed</Nav.Link>
        <Nav.Link href="/">Categories</Nav.Link>
        <Nav.Link href="/">Join</Nav.Link>
        <Nav.Link href="/">Contact</Nav.Link>
      </Nav>
      <Nav inline>
        <Nav.Link href="/">Login</Nav.Link>
          <Nav.Link>{' | '}</Nav.Link>
        <Nav.Link href="/">Support</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavBar
