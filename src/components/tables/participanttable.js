import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import './tables.css';
const ParticipantTable = (props) => {
    return (
        <Table striped bordered hover className="part-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {props.ptData.map((pt) => {
            return (
              <tr key={pt.participantid}>
                <td>{pt.participantid}</td>
                <td>{pt.participantfirstname}</td>
                <td>{pt.participantlastname}</td>
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
