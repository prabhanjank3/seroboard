import { useEffect, useState } from "react";
import { Card, CardText, CardTitle, Button, Row, Col } from "reactstrap";
import properties from "../../Properties";
import { getDateInputFormat } from "../../services/commonFunctions";
import axios from "axios";
const DashboardCards = () => {
  const [cardstate, setcardstate] = useState({totalbatch:0, activebatch:0})
  useEffect(() => {
  let totalurl = properties.SERVER_URL+'/totalbatchcount';
  let activeurl = properties.SERVER_URL+'/activebatchcounton?date='+getDateInputFormat(new Date());
  Promise.all([axios.get(totalurl), axios.get(activeurl)]).then(resp => {
    console.log(resp)
    setcardstate({...cardstate,
    totalbatch:resp[0]['data'][0]['count'],
    activebatch:resp[1]['data'][0]['active']
  });
  })
  },[])
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
        <Col md="12" lg="6">
          <Card body color="light-warning">
            <CardTitle tag="h2">{cardstate.totalbatch}</CardTitle>
            <CardText tag="h5">
              Total Batches
            </CardText>
          </Card>
        </Col>
        <Col md="12" lg="6">
          <Card body color="light-info">
            <CardTitle tag="h2">{cardstate.activebatch}</CardTitle>
            <CardText tag="h5">
             Active Batches
            </CardText>
          </Card>
        </Col>
        {/* <Col md="6" lg="3">
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
        </Col> */}
      </Row>
    </div>
  );
};

export default DashboardCards;
