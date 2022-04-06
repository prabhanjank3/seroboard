import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import Usertable from "../components/tables/usertable";
import Batchtable from "../components/tables/batchtable";
// import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import AddUser from "../components/modals/addUserModal";
import { connect } from "react-redux";
import PieChart from "../components/dashboard/PieChart"
import DashboardCards from "../components/dashboard/DashboardCards"
import ProgressCircle from "../components/dashboard/ProgressCircle"
import DashedLineChart from "../components/dashboard/DashedLineChart";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = (props) => {
  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <DashboardCards />
      <Row>
        <Col sm="6" lg="6" xl="6" xxl="6">
        <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="6" xxl="6">
        <PieChart />
        </Col>
      </Row>
      <Row>
        <Col sm="6" lg="6" xl="6" xxl="6">
        <ProgressCircle />
        </Col>
        <Col sm="6" lg="6" xl="6" xxl="6">
        <DashedLineChart />
        </Col>
      </Row>
      {/* <Row>
        <Col sm="12" lg="12" xl="12" xxl="12">
          {props.role === "ADMIN" && <Usertable />}
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12" xl="12" xxl="12">
          <Batchtable />
        </Col>
      </Row> */}
      {/***Table ***/}
      {/* <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row> */}
      {/***Blog Cards***/}
      {/* <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="4" xl="4" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    role: state.authData.role,
  };
};

export default connect(mapStateToProps)(Starter);
