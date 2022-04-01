import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import AssignmentContainer from '../../container/AssignmentContainer';
import {markAssignmentScore} from '../../services/apicalls/assignmentrecapicalls';
import {Link, useNavigate} from 'react-router-dom';
import './modal.css'
const AssignmentModal = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const insertAction = (data) => {
        return markAssignmentScore(data).then(resp => {
            handleClose();
           alert(`Scores submitted!`);
        }).catch(err => {
            alert('Something went wrong!');
        });
   }
    return (
      <>
        <Button className="batch-action-btn" onClick={handleShow}>
            Assignments
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Assignment</Modal.Title>
          </Modal.Header>
          <Modal.Body><AssignmentContainer partData={props.partData} batchid={props.batchid} action={insertAction} /></Modal.Body>
        </Modal>
      </>
    );
  }
export default AssignmentModal;
 