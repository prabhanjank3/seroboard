import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/user-bg.jpg";
import { connect } from "react-redux";

let navigation = [];
const adminNav = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer",
  },
  {
    title: "User",
    href: "/Usertable",
    icon: "bi bi-people-fill",
  },
  {
    title: "Batches",
    href: "/batch",
    icon: "bi bi-person-lines-fill",
  },
  {
    title: "Profile",
    href: "/editprofile",
    icon: "bi bi-person-badge",
  },
];
const coordinatorNav = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer",
  },
  {
    title: "Profile",
    href: "/editprofile",
    icon: "bi bi-person-badge",
  },

  {
    title: "Batches",
    href: "/batch",
    icon: "bi bi-person-lines-fill",
  },
];
const instructorNav = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer",
  },
  {
    title: "Profile",
    href: "/editprofile",
    icon: "bi bi-person-badge",
  },
  {
    title: "Batches",
    href: "/batch",
    icon: "bi bi-person-lines-fill",
  },
];

const Sidebar = (props) => {
  switch (props.userData.role) {
    case "ADMIN":
      navigation = adminNav;
      break;
    case "COORDINATOR":
      navigation = coordinatorNav;
      break;
    case "INSTRUCTOR":
      navigation = instructorNav;
      break;

    default:
      break;
  }
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{ background: `url(${probg}) no-repeat` }}
      >
        <div className="container p-3 d-flex">
          <img
            src={props.userData.imageUrl ? props.userData.imageUrl : user1}
            alt="user"
            width="50"
            className="rounded-circle"
          />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="container bg-light text-dark p-2 opacity-75">
          {props.userData.userFirstName}
        </div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
