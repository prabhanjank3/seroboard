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
import BatchVisual from '../display/BatchVisual'
import AddParticipantsModal from "../modals/addParticipantsModal"
import AddAssignmentModal from "../modals/addAssignmentModal";
function BatchDetails() {
    
  const location = useLocation();
  const batchDetails = location.state.batch;
  return (
    <div>
      <BatchVisual batchid={batchDetails.batchid}/>
      <div className="d-flex justify-content-between">
        <h5>Batch Details</h5>
        <Link to="/batch">
          <i className="bi bi-arrow-left"></i>
          <span className="ms-1 d-inline-block">Back</span>
        </Link>
      </div>
      
      <Row>
        <Col lg="12">
          
        </Col>
        <Col xs="12" md="12">
          <Card>
            <CardBody className="">
              <div className="d-flex justify-content-between button-group">
                <AddAssignmentModal>
                <Button className="btn" color="primary">
                  Add Assignments
                </Button>
                </AddAssignmentModal>
                
                <AddParticipantsModal batchid={batchDetails.batchid}>
                <Button className="btn" color="success">
                  Add Participants
                </Button>
                </AddParticipantsModal>
                
                <ParticipantBulkUpload />
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
