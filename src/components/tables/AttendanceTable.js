import React, { useEffect, useRef, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./tables.css";
const NewUserTable = (props) => {
    console.log(props)
    let data = {};
    const checkboxInput = useRef(null);
    const [presentState,setPresentState] = useState({data:{},attReportData:[]});
    const submitReport = () => {
        props.action(presentState.data);
    }
    useEffect(() => {
        for(let t in props.partData)
        {
            data[props.partData[t]['participantid']]={
                participantid:props.partData[t]['participantid'],
                ispresent:false,
                date:props.date
            };
        }
        for(let t in props.attReportData)
        {
            data[props.attReportData[t]['participantid']]['ispresent'] = props.attReportData[t]['ispresent']
        }
        setPresentState({...presentState,data:data,attReportData:props.attReportData});
        console.log(presentState)
    },[props]);
    const onPresentMark = (prid,mark) => {
        var dummy = presentState;
        dummy.data[prid]['ispresent'] = mark;
        setPresentState(dummy);
    }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Present/Absent</th>
            {/* {props.role === "ADMIN" && <th>Actions</th>} */}
          </tr>
        </thead>
        <tbody>
          {props.partData.map((user) => {
            return (
              <tr key={user.participantid}>
                <td>{user.participantid}</td>
                <td>{user.participantfirstname}</td>
                <td>{user.participantlastname}</td>
                <td><input type="checkbox" ref={checkboxInput} key={Math.random()} defaultChecked={((presentState.attReportData.length==0)?false:presentState.data[user.participantid]['ispresent'])} onChange={e => {onPresentMark(user.participantid,e.target.checked)}} /></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button onClick={() => submitReport()}>Submit</Button>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(NewUserTable);
