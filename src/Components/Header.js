import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

export class Header extends Component {
    render() {
        return (
            <Nav defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/">Main</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/Favorite">Favorite</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Header
