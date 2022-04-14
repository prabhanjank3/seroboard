import React, { useEffect, useState } from "react";
import Property from "../../Properties";
import axios from "axios";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BatchDropdown from "../utils/BatchDropdownInput";
import "./forms.css";
import "../component.css";
import { getParticipantDetails } from "../../services/apicalls/participantapicalls";

const EditParticipantForm = (props) => {
  useEffect(() => {
    getParticipantDetails(props.id).then((resp) => {
      setState(resp.data[0]);
    });
  }, []);
  const initialState = {
    participantfirstname: "",
    participantlastname: "",
    participantemail: "",
    batchname: "",
  };
  const navigate = useNavigate();
  const sendForInsert = () => {
    return props.action(formState);
  };
  const [formState, setState] = useState(initialState);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={formState.participantfirstname}
              onChange={(e) => {
                setState({ ...formState, participantfirstname: e.target.value });
              }}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              value={formState.participantemail}
              onChange={(e) => {
                setState({ ...formState, participantemail: e.target.value });
              }}
            />
          </Col>
          <Col>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={formState.participantlastname}
              onChange={(e) => {
                setState({ ...formState, participantlastname: e.target.value });
              }}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Batch
            </label>
            <BatchDropdown
              // title="Select Role"
              // options={["ADMIN", "INSTRUCTOR", "COORDINATOR"]}
              value={formState.batchname}
              onChange={(e) => {
                setState({ ...formState, batchname: e.target.value });
              }}
            />
          </Col>
        </Row>
        <Row>
          <Button
            type="button"
            className="btn btn-primary new-user-insert-btn"
            onClick={() => {
              sendForInsert();
            }}
          >
            Submit
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default EditParticipantForm;
