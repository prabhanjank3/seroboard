import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import properties from "../../Properties";
import './tables.css';
const ParticipantTable = (props) => {
    let [ptData,setPtData] = useState([])
    useEffect(() => {
        axios.get(properties.SERVER_URL+'/batchtopperformers/'+props.batchid).then(resp => {
            setPtData(resp.data)
        })
    },[props])
    return (
        <Table striped bordered hover className="part-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {ptData.map((pt) => {
            return (
              <tr key={pt.participantid}>
                <td>{pt.participantid}</td>
                <td>{pt.participantfirstname}</td>
                <td>{pt.participantlastname}</td>
                <td>{pt.assignmentscore}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
}
const mapStateToProps = (state) => {
    return { role: state.authData.role };
    };
const mapDispatchToProps = (dispatch) => {
return {
    setUserLoggedIn: (actionType, payLoad) => {
    dispatch({ type: actionType, payLoad: payLoad });
    },
};
};
export default connect(mapStateToProps, mapDispatchToProps)(ParticipantTable);
