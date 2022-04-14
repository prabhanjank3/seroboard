import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import { connect } from "react-redux";
import PieChart from "../components/dashboard/PieChart";
import DashboardCards from "../components/dashboard/DashboardCards";
import ProgressCircle from "../components/dashboard/ProgressCircle";
import DashedLineChart from "../components/dashboard/DashedLineChart";
import BatchVisual from "../components/display/BatchVisual";
import BatchAvgScoreChart from "../components/dashboard/BatchAvgScoreChart";
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
          <BatchAvgScoreChart />
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
