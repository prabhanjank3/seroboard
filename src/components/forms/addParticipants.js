import React, { useState } from "react";
import {Container, Row, Col, Button, Dropdown} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import DropdownInput from '../utils/dropdownInput';
import './forms.css';
import '../component.css';
import { convertArrayToPgArray } from "../../services/commonFunctions"; 
const NewParticipantForm = (props) => {
    const initialState = {
        "participantfirstname": "",
        "participantlastname": "",
        "participantemail": "",
        "participantbatchid":props.id,
        "participantskills":""
    };
    const navigate = useNavigate();
    const stringToPgArray = (str) => {
        var starr = str.split(',');
        return (convertArrayToPgArray(starr));
        
      }
    const sendForInsert = () => {
        var ret = stringToPgArray(formState.participantskills);
        var data = ({...formState, participantskills:ret});
        props.action(data);
    }
    const [formState, setState] = useState(initialState);
    return (
    <div>
        <Container>
        <Row>
            <Col>
            <label for="exampleFormControlInput1" className="form-label" >First Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1"  onChange={(e) => {setState({...formState,"participantfirstname": e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e) => {setState({...formState,"participantemail": e.target.value})}}/>
            </Col>
            <Col>
            <label for="exampleFormControlInput1" className="form-label" >Last Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => {setState({...formState,"participantlastname": e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >Batch</label> 
            <input type="text" className="form-control" id="exampleFormControlInput1" value={props.id} onChange={(e) => {setState({...formState,"participantbatchid": e.target.value})}} disabled/>
            </Col>
        </Row>
        <Row>
            <Col>
            <label for="exampleFormControlInput1" className="form-label" >Skills (enter comma seperated values without space)</label> 
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="E.g Java,Python" onChange={(e) => {setState({...formState,"participantskills": e.target.value})}}/>
            </Col>
        </Row>
        <Row>
        <Button type="button" className="btn btn-primary new-user-insert-btn" onClick={() => {sendForInsert()}} >Submit</Button>
        </Row>
        </Container>
    </div>
    );
}

export default (NewParticipantForm);