import React, { useEffect, useRef, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getAttendanceData } from "../../services/apicalls/attendanceapicalls";
import "./tables.css";
const NewUserTable = (props) => {
    let data = {};
    const checkboxInput = useRef(null);
    const [presentState,setPresentState] = useState({data:{},attReportData:[]});
    const makeAbsent = [];
    const submitReport = () => {
        let dummy = {...presentState.data};
        // presentState.attReportData.forEach(key => delete dummy[key]);
        // Object.keys(dummy).filter(key => dummy[key]['ispresent']===false).forEach(key => delete dummy[key]);
        props.action(dummy);
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
            if(props.attReportData.length>0)
            {
                data[props.attReportData[t]]['ispresent'] = true
            }
        }
        setPresentState({...presentState,data:data,attReportData:props.attReportData});
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
                <td><input type="checkbox" ref={checkboxInput} key={Math.random()} defaultChecked={((presentState.attReportData.length==0)?false:(Object.keys(presentState.data).length != 0) && presentState.data[user.participantid]['ispresent'])}  onChange={e => {onPresentMark(user.participantid,e.target.checked)}} /></td>
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
