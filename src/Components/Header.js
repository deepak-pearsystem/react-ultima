import React, { Component } from 'react';
import {BASE_URL} from '../baseUrl';
import { 
  Link
} from "react-router-dom";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
class Header extends Component {
  
  render() {
    
    return (
      <React.Fragment>
        <header className="header-section fixed-top">
        <div className="custom-navbar">
        <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={ require('../Images/web-logo.png')} className="img-fluid" alt="logo"/>
           
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <NavDropdown title="About Us" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home"><Link to="/ownership">Co-Ownership</Link></Nav.Link>
          <NavDropdown title="Stable" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Media" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
            <Nav.Link href="#link"><Link to="/event">Event</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/login">Login</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/signup">Signup</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
        </header>
      </React.Fragment>
      
    );
  }
}

export default Header;