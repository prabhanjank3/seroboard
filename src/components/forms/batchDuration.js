import React, { useState, useEffect } from "react";
import {Container, Row, Col, Button, Dropdown} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import './forms.css';
import '../component.css';
import { getBatchDetails } from "../../services/apicalls/batchapicalls";
import {getDateInputFormat} from '../../services/commonFunctions';
export default (props) => {
    const initialState = {
        "from": getDateInputFormat(props.from),
        "to": getDateInputFormat(props.to)
    };
    const updateBatchDuration = () => {
        return props.action(formState);
    }
    const [formState, setState] = useState(initialState);
    return (
    <div >
        <Container>
        <Row>
            <Col lg={10}>
            <label for="exampleFormControlInput1" className="form-label" >From</label>
            <input type="date" className="batch-duration-input"  placeholder="yyyy-mm-dd" value={formState.from}  onChange={(e) => {setState({to:formState.to,from: e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >To</label>
            <input type="date" className="batch-duration-input"  placeholder="yyyy-mm-dd" value={formState.to}  onChange={(e) => {setState({from:formState.from,to: e.target.value})}}/>
            </Col>
            
            <Col lg={2}>
                <Button className="batch-duration-input-btn" onClick={()=> {updateBatchDuration()}}>Update</Button>
            </Col>
        </Row>
        </Container>
    </div>
    );
}