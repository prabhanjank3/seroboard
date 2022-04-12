import axios from "axios";
import React, { useEffect, useState } from "react";
import {Form} from 'react-bootstrap';
import { connect } from "react-redux";
import properties from "../../Properties";
import { getAllBatchs } from "../../services/apicalls/batchapicalls";
const BatchDropdown = (props) => {
    let [drdata, setdrdata] = useState([]);
    useEffect(() => {
        let filter = '';
        if(props.role === 'INSTRUCTOR')
            filter = 'instructorname='+props.userFirstName
        if(props.role === 'COORDINATOR')
            filter = 'coordinatorname='+props.userFirstName
        axios.get(properties.SERVER_URL+'/batch?'+filter).then(resp => {
            setdrdata(resp.data);
        })
    },[])
    return (
    <Form.Select aria-label="Default select example" onChange={props.onChange} >
        <option>Select Batch</option>
        {drdata.map((option) => {
            return <option value={option.batchid}>{option.batchname}</option>;
        })}
    </Form.Select>
    );
}
const mapStateToProps = (state) => {
    return { role: state.authData.role , userFirstName:state.authData.userFirstName};
  };
export default connect(mapStateToProps)(BatchDropdown)