import React, { useState, useEffect } from "react";
import {Container, Row, Col, Button, Dropdown,} from 'react-bootstrap';
import './forms.css';
import '../component.css';
import {getDateInputFormat} from '../../services/commonFunctions';
export default (props) => {
    const initialState = {
        "key": ''
    };
    const updateSearchKeyword = () => {
        // return props.action(formState);
    }
    const [formState, setState] = useState(initialState);
    return (
    <div >
        <Container className="px-0">
        <Row>
            <Col lg={8}>
            <input type="text" className="batch-duration-input" value={formState.key}  placeholder="Enter keywords" onChange={(e) => {setState({key: e.target.value})}}/>
            </Col>
            <Col lg={4}>
            <Button className="batch-duration-input-btn pull-right"  onClick={()=> {updateSearchKeyword()}}>Search</Button>
            </Col>
        </Row>
        </Container>
    </div>
    );
}