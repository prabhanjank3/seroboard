import React from "react";
import {Navbar, Nav, NavDropdown,Container} from 'react-bootstrap';
import _default from "react-bootstrap/esm/FormControl";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const NavComponent = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Sero Board</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                {(props.userData.role === 'ADMIN') && <NavDropdown title="Actions" id="collasible-nav-dropdown">
                    <NavDropdown.Item ><Link to='/user/insert'>Add User</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to='/batch/insert'>Add Batch</Link></NavDropdown.Item>
                </NavDropdown>
                }
                {(props.userData.role === 'COORDINATOR') && <NavDropdown title="Actions" id="collasible-nav-dropdown">
                    <NavDropdown.Item ><Link to='/user/insert'>Add Particepants</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to='/batch/insert'>Mark Attendance</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to='/batch/insert'>Generate Reports</Link></NavDropdown.Item>
                </NavDropdown>
                }
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} href="#memes">
                    {`Hello ${props.userData.userFirstName} (${props.userData.role})`}
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
const mapStateToProps = (state) => {
    return {userData:{
        role:state.authData.role,
        userFirstName: state.authData.userFirstName
    }};
};
const mapDispatchToProps = (dispatch) => {
    return {
    setUserLoggedIn: (actionType,payLoad) => {
        dispatch({type: actionType, payLoad:payLoad});
    }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavComponent);