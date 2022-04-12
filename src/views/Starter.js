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
import PieChart from "../components/dashboard/PieChart";
import DashboardCards from "../components/dashboard/DashboardCards";
import ProgressCircle from "../components/dashboard/ProgressCircle";
import DashedLineChart from "../components/dashboard/DashedLineChart";
import BatchVisual from "../components/display/BatchVisual";

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
      {/* <Row>
        <Col sm="6" lg="6" xl="6" xxl="6">
          <ProgressCircle />
        </Col>
        <Col sm="6" lg="6" xl="6" xxl="6">
          <DashedLineChart />
        </Col>
      </Row> */}
      <BatchVisual />
      
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    role: state.authData.role,
  };
};

export default connect(mapStateToProps)(Starter);
