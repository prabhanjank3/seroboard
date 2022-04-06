import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import Logo from "./Logo";
import { ReactComponent as LogoWhite } from "../assets/images/logos/APISERO-logo.svg";
import user1 from "../assets/images/users/user4.jpg";
import { connect } from "react-redux";
import AddUserModal from "../components/modals/addUserModal";
import AddBatchModal from "../components/modals/addBatchModal";
import Themeroutes from "../routes/Router";

const Header = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  function handleLogout() {
    props.setUserLoggedOut();
  }

  const editUserProfile = () => {
    navigate("/editprofile");
  };
  return (
    <Navbar color="header-color" dark expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <Logo />
        </div>
        <NavbarBrand href="/">
          <LogoWhite className=" d-lg-none" />
        </NavbarBrand>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        {props.userData.role === "ADMIN" && (
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Actions
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <AddUserModal>
                    <Button>Add User</Button>
                  </AddUserModal>
                </DropdownItem>
                <DropdownItem>
                  <AddBatchModal>
                    <Button>Add Batch</Button>
                  </AddBatchModal>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        )}
        <div className="d-flex">
          <p className="mt-3 float-right">
            {`Hello ${props.userData.userFirstName} (${props.userData.role})`}
          </p>
        </div>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            <img
              src={props.userData.imageUrl ? props.userData.imageUrl : user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem onClick={editUserProfile}>Edit Profile</DropdownItem>
            <DropdownItem divider />
            {props.userData.isLoggedIn ? (
              <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
            ) : null}
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: {
      role: state.authData.role,
      userFirstName: state.authData.userFirstName,
      isLoggedIn: state.authData.isUserLoggedIn,
      imageUrl: state.authData.imageUrl,
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedIn: (actionType, payLoad) => {
      dispatch({ type: actionType, payLoad: payLoad });
    },
    setUserLoggedOut: () => {
      dispatch({ type: "LOG_OUT" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
