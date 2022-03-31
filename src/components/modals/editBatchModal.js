import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import EditBatchForm from '../forms/editBatchForm';
import {updateBatch} from '../../services/apicalls/batchapicalls';
const EditUserModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendForUpdate = (data) => {
        updateBatch(props.batchid,data).then(resp => {
            handleClose();
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
            <Modal.Title>Update Batch</Modal.Title>
          </Modal.Header>
          <Modal.Body><EditBatchForm id={props.batchid} action={sendForUpdate}/></Modal.Body>
        </Modal>
      </>
    );
  }
export default EditUserModal;
 