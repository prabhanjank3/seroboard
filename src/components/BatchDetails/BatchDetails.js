import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
  Table,
} from "reactstrap";
import ProgressCircle from "../dashboard/ProgressCircle";
import Chart from "react-apexcharts";
import ParticipantBulkUpload from '../modals/participantBulkUploadModal';

function BatchDetails() {
  const [chartState, setChartState] = useState({ catagories: [], data: [] });
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 2,
      },
    },
    colors: ["#0d6efd", "#009efb", "#6771dc"],
    xaxis: {
      categories: chartState.catagories,
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };
  const series = [
    {
      data: [20, 40, 50, 30, 40],
    },
  ];
  const location = useLocation();
  const batchDetails = location.state.batch;
  console.log(batchDetails);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h5>Batch Details</h5>
        <Link to="/batch">
          <i className="bi bi-arrow-left"></i>
          <span className="ms-1 d-inline-block">Back</span>
        </Link>
      </div>
      <Row className="mt-3">
        <Col md="6" lg="6">
          <Card body color="light-warning">
            <CardText>
              <div className="d-flex flex-column">
                <div>
                  <h6>Batch Name</h6>
                  <p>FAST: PYTHON TRAINING</p>
                </div>
                <div>
                  <h6>START DATE</h6>
                  <p>21-02-2022</p>
                </div>
                <div>
                  <h6>END DATE</h6>
                  <p>25-05-2022</p>
                </div>
                <div>
                  <h6>COORDINATOR</h6>
                  <p>OMKAR SUTAR</p>
                </div>
                <div>
                  <h6>INSTRUCTOR</h6>
                  <p>MAHESH JAWALKAR</p>
                </div>
              </div>
            </CardText>
          </Card>
        </Col>
        <Col md="6" lg="6">
          <ProgressCircle progress={20} />
        </Col>
        <Col md="6" lg="6">
          <Card body color="light-success">
            <CardTitle tag="h5">Batch Attendance</CardTitle>
            <CardText>
              <Chart
                options={options}
                series={series}
                type="bar"
                height="379"
              />
            </CardText>
          </Card>
        </Col>
        <Col md="6" lg="6">
          <Card body color="light-danger">
            <CardTitle tag="h5">Top 5 Batch Performers </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card>
            <CardTitle tag="h5" className="border-bottom p-3 mb-0">
              <i className="bi bi-card-text me-2"> </i>
              Batch Participants
            </CardTitle>
            <CardBody>
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Certificate</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="12">
          <Card>
            <CardBody className="">
              <div className="d-flex justify-content-between button-group">
                <Button className="btn" color="primary">
                  Add Assignments
                </Button>
                <Button className="btn" color="success">
                  Add Participants
                </Button>
                <ParticipantBulkUpload />
                {/* <Button className="btn" color="info">
                  Participants Bulk Upload
                </Button> */}
                <Button className="btn" color="warning">
                  Upload PPT's
                </Button>
                <Button className="btn" color="danger">
                  Delete Batch
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default BatchDetails;
