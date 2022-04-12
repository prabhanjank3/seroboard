import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import AddPostAssessmentForm from '../forms/addPostAssessment';
import {addPostAssessment} from '../../services/apicalls/postassapicalls';
const EditUserModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const sendForInsert = (data) => {
        addPostAssessment(data).then(resp => {
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
            <Modal.Title>Add Post Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body><AddPostAssessmentForm batchid={props.batchid} action={(data) => sendForInsert(data)} /></Modal.Body>
        </Modal>
      </>
    );
  }
export default EditUserModal;
 