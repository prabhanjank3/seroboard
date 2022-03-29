import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useState } from "react";
import { getAllParticipants } from "../../services/apicalls/participantapicalls";
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
                {/* <td><ul>{pt.participantskills.map(skill => {
                    return <li>{skill}</li>
                })}</ul></td> */}
                {/* {props.role === "ADMIN" && (
                  <td>
                    <EditBatchModal id={batch.batchid} action={setData} />
                    <Button
                      className="table-item-action-btn"
                      onClick={() => {
                        onDeleteClick(batch.batchid);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                )} */}
                {/* {props.role === "COORDINATOR" && (
                  <td>
                    <AddParticipantsModal id={batch.batchid} action={setData} />
                    <Button className="table-item-action-btn">
                      <BsUiChecks />
                    </Button>
                    <Button className="table-item-action-btn">
                      <HiDocumentReport />
                    </Button>
                  </td>
                )} */}
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
