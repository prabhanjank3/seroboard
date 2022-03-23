import React, { useState } from "react";
import Property from '../../Properties';
import axios from 'axios';
import {Container, Row, Col, Button, Dropdown} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import RoleInput from '../utils/dropdownInput';
import './forms.css';
import '../component.css';
export default (props) => {
    const initialState = {
        "batchName": "",
        "batchStartDate": "",
        "batchEndDate": "",
        "instructorName":"",
    };
    const navigate = useNavigate();
    const sendForInsert = () => {
        return props.action(formState);
    }
    const [formState, setState] = useState(initialState);
    return (
    <div class="emp-input-form">
        <Container>
        <Row>
            <label for="exampleFormControlInput1" className="form-label" >Batch Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1"  onChange={(e) => {setState({...formState,"batchName": e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >Start Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput1" onChange={(e) => {setState({...formState,"batchStartDate": e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >End Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput1" onChange={(e) => {setState({...formState,"batchEndDate": e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >Instructor</label> 
            <RoleInput title='Select Instructor' options={['Raghu', 'Gopi', 'Mahesh']} onChange={(e) => {setState({...formState,"instructorName": e.target.value})}} />
            
        </Row>
        <Row>
        <Button type="button" className="btn btn-primary new-user-insert-btn" onClick={() => {sendForInsert()}} >Submit</Button>
        </Row>
        </Container>
    </div>
    );
}