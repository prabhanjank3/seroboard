import React, { useState, useEffect } from "react";
import {Container, Row, Col, Button, Dropdown} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import RoleInput from '../utils/dropdownInput';
import './forms.css';
import '../component.css';
import { getBatchDetails } from "../../services/apicalls/batchapicalls";
import {getDateInputFormat} from '../../services/commonFunctions';
export default (props) => {
    useEffect(()=>{
        getBatchDetails(props.id).then(resp => {
            var stDate = getDateInputFormat(resp.data[0].batchstartdate);
            var endDate = getDateInputFormat(resp.data[0].batchenddate);
            setState({...resp.data[0], batchstartdate:stDate, batchenddate:endDate});
        })
    },[]);
    const initialState = {
        "batchname": "",
        "batchstartdate": "",
        "batchenddate": "",
        "instructorname":"",
    };
    const navigate = useNavigate();
    const sendForInsert = () => {
        console.log(formState);
        return props.action(formState);
    }
    const [formState, setState] = useState(initialState);
    return (
    <div >
        <Container>
        <Row>
            <label for="exampleFormControlInput1" className="form-label" >Batch Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={formState.batchname}  onChange={(e) => {setState({...formState,"batchname": e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >Start Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="yyyy-mm-dd" value={formState.batchstartdate}  onChange={(e) => {setState({...formState,"batchstartdate": e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >End Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput1" value={formState.batchenddate}  onChange={(e) => {setState({...formState,"batchenddate": e.target.value})}}/>
            <label for="exampleFormControlInput1" className="form-label" >Instructor</label> 
            <RoleInput title='Select Instructor' options={['Raghu', 'Gopi', 'Mahesh']} value={formState.instructorname} onChange={(e) => {setState({...formState,"instructorname": e.target.value})}} />
            
        </Row>
        <Row>
        <Button type="button" className="btn btn-primary new-user-insert-btn" onClick={() => {sendForInsert()}} >Submit</Button>
        </Row>
        </Container>
    </div>
    );
}