import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import NewParticipantForm from '../forms/addParticipants';
import {insertNewParticipant} from '../../services/apicalls/participantapicalls';
const AddParticipantModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const sendForInsert = (data) => {
        insertNewParticipant(data).then(resp => {
            handleClose();
            if('data' in resp)
            {
            alert('Inserted Successfully');
            }
            else
            {
              alert('Something went wrong!');
            }
        })
        .catch(err => {
            handleClose();
            alert('Something went wrong!');
        })
    }
    return (
      <>
        <span className="batch-action-btn" onClick={handleShow}>
            {props.children}
        </span>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Participants</Modal.Title>
          </Modal.Header>
          <Modal.Body><NewParticipantForm id={props.batchid} action={(data) => sendForInsert(data)} /></Modal.Body>
        </Modal>
      </>
    );
  }
export default AddParticipantModal;
 