import React, { useEffect, useRef, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./tables.css";
const NewPostAssTable = (props) => {
    console.log(props);
    let data = {};
    const [presentState,setPresentState] = useState({data:{}});
    const submitReport = () => {
        let dummy = {...presentState.data};
        props.action(dummy);
    }
    useEffect(() => {
        for(let t in props.partData)
        {
            data[props.partData[t]['participantid']]={
                participantid:props.partData[t]['participantid'],
                score:0,
                postassid:props.postassid
            };
        }
        for(let t in props.scores)
        {
            if(props.scores.length>0)
            {
                data[props.scores[t]['participantid']]['score'] = props.scores[t]['score'];
            }
        }
        setPresentState({...presentState,data:data});
    },[props]);
    const onMarkChange = (prid,mark) => {
        var dummy = presentState;
        dummy.data[prid]['score'] = mark;
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
            <th>Score</th>
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
                <td><input type="text" class="score-input" key={Math.random()} defaultValue={ (Object.keys(presentState.data).length>0) && presentState.data[user.participantid]['score'] } onChange={e => {onMarkChange(user.participantid,e.target.value)}} /></td>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPostAssTable);
