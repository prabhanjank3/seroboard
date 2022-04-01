import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./forms.css";
import "../component.css";
import { getBatchDetails } from "../../services/apicalls/batchapicalls";
import { getDateInputFormat } from "../../services/commonFunctions";
export default (props) => {
  const initialState = {
    from: getDateInputFormat(props.from),
    to: getDateInputFormat(props.to),
  };
  const updateBatchDuration = () => {
    return props.action(formState);
  };
  const [formState, setState] = useState(initialState);
  return (
    <div>
      <Container className="px-0">
        <Row>
          <Col lg={1} className="text-center pt-2">
            <label htmlFor="From">From</label>
          </Col>
          <Col lg={3}>
            <input
              type="date"
              className="form-control"
              placeholder="yyyy-mm-dd"
              value={formState.from}
              onChange={(e) => {
                setState({ to: formState.to, from: e.target.value });
              }}
            />
          </Col>
          <Col lg={1} className="text-center pt-2">
            <label htmlFor="To">To</label>
          </Col>
          <Col lg={3}>
            <input
              type="date"
              className="form-control"
              placeholder="yyyy-mm-dd"
              value={formState.to}
              onChange={(e) => {
                setState({ from: formState.from, to: e.target.value });
              }}
            />
          </Col>
          <Col lg={4}>
            <Button
              className="btn btn-primary batch-duration-input-btn"
              onClick={() => {
                updateBatchDuration();
              }}
            >
              Update
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
