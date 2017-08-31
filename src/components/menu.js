'use strict';
import React from 'react';
import { Nav, Navbar, Badge, NavItem } from 'react-bootstrap';

class Menu extends React.Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contacts">Contact Us</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem href="/admin">Admin</NavItem>
            <NavItem href="/cart">Cart
              {
                this.props.cartItemsNumber > 0 ? (<Badge className="badge">{this.props.cartItemsNumber}</Badge>) : ''
              }
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Menu;
