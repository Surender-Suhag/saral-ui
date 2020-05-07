import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand a, .navbar-nav .nav-link {
        color:  #bbb;

        &:hover {
            color:white;
            text-decoration: none;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand>
                <Link to="/">SARAL</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link className="nav-link" to="/">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/keywords">Keywords</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/components">Components</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/testlab">Test-Lab</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
