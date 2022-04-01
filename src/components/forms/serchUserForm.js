import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import "./forms.css";
import "../component.css";
import { getDateInputFormat } from "../../services/commonFunctions";

export default (props) => {
  const initialState = {
    key: "",
  };

  const updateSearchKeyword = () => {
    console.log(formState);
    // return props.action(formState);
  };
  const [formState, setState] = useState(initialState);
  return (
    <div>
      <Container className="px-1">
        <Row>
          <Col lg={6}>
            <input
              type="text"
              className="form-control "
              value={formState.key}
              placeholder="Enter keywords"
              onChange={(e) => {
                setState({ key: e.target.value });
              }}
            />
          </Col>
          <Col lg={6}>
            <Button
              className=" btn batch-duration-input-btn pull-right"
              onClick={() => {
                updateSearchKeyword();
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
