import React from "react";
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
function ParticipantDetailsView() {
  const location = useLocation();
  const batchDetails = location.state.batch;
  console.log(batchDetails);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h5>Participant Detail</h5>
        <Link to="/batch">
          <i className="bi bi-arrow-left"></i>
          <span className="ms-1 d-inline-block">Back</span>
        </Link>
      </div>
      <Row className="mt-3">
        <Col md="6" lg="3">
          <Card body color="light-warning">
            <CardTitle tag="h5">Batch Details</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-info">
            <CardTitle tag="h5">Batch Status</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-success">
            <CardTitle tag="h5">Batch Attendance</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-danger">
            <CardTitle tag="h5">Top 5 Batch Performers </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </Card>
        </Col>
      </Row>
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
                <Button className="btn" color="info">
                  Participants Bulk Upload
                </Button>
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
        
      </Row>
    </div>
  );
}
export default ParticipantDetailsView;