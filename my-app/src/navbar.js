// React-Bootstrap Imports
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// <NavBar />
// This component handles the navigation bar at the top of the web app
export function NavBar() {
    return (
        <Navbar expand="lg" className="p-3" >
            <LinkContainer to="/">
                <Navbar.Brand>RAUWR</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to="/learn">
                        <Nav.Link>Learn</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/group">
                        <Nav.Link>Groups</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/orgs">
                        <Nav.Link>Orgs</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}