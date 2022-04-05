import { Card, CardText, CardTitle, Button, Row, Col } from "reactstrap";

const DashboardCards = () => {
  return (
    <div>
      <Row>
        {/* <Col md="6" lg="3">
            <Card body color="primary" inverse>
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <div>
                <Button>Button</Button>
              </div>
            </Card>
          </Col>
          <Col md="6" lg="3">
            <Card body color="info" inverse>
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <div>
                <Button>Button</Button>
              </div>
            </Card>
          </Col>
          <Col md="6" lg="3">
            <Card body color="success" inverse>
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <div>
                <Button>Button</Button>
              </div>
            </Card>
          </Col>
          <Col md="6" lg="3">
            <Card body color="danger" inverse>
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <div>
                <Button>Button</Button>
              </div>
            </Card>
          </Col> */}
        <Col md="6" lg="3">
          <Card body color="light-warning">
            <CardTitle tag="h2">07</CardTitle>
            <CardText tag="h5">
              Total Batches
            </CardText>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-info">
            <CardTitle tag="h2">15</CardTitle>
            <CardText tag="h5">
             Active Batches
            </CardText>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-success">
            <CardTitle tag="h2">12</CardTitle>
            <CardText tag="h5">
              Events
            </CardText>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-danger">
            <CardTitle tag="h2">07</CardTitle>
            <CardText tag="h5">
              Trained Resources
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardCards;
