import React, { useState } from "react";
import {Container, Row, Col, Button, Dropdown} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import DropdownInput from '../utils/dropdownInput';
import './forms.css';
import '../component.css';

const NewUserForm = (props) => {
    const initialState = {
        "userFirstName": "",
        "userLastName": "",
        "userEmail": "",
        "userBatchName":""
    };
    const navigate = useNavigate();
    const sendForInsert = () => {
        return props.action(formState);
    }
    const [formState, setState] = useState(initialState);
    return (
    <div>
        <Container>
        <Row>
            <Col>
            <label for="exampleFormControlInput1" className="form-label" >First Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1"  onChange={(e) => {setState({...formState,"userFirstName": e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e) => {setState({...formState,"userEmail": e.target.value})}}/>
            </Col>
            <Col>
            <label for="exampleFormControlInput1" className="form-label" >Last Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => {setState({...formState,"userLastName": e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >Batch</label> 
            <DropdownInput title='Select Batch' options={['First']} onChange={(e) => {setState({...formState,"userBatchName": e.target.value})}} />
            </Col>
        </Row>
        <Row>
        <Button type="button" className="btn btn-primary new-user-insert-btn" onClick={() => {sendForInsert()}} >Submit</Button>
        </Row>
        </Container>
    </div>
    );
}

export default (NewUserForm);