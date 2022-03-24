import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import EditBatchForm from '../forms/editBatchForm';
import {updateBatch} from '../../services/apicalls/batchapicalls';
const EditUserModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendForUpdate = (data) => {
        updateBatch(props.id,data).then(resp => {
            handleClose();
            props.action();
        })
        .catch(err => {
            handleClose();
            alert('Something went wrong!');
        })
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Batch</Modal.Title>
          </Modal.Header>
          <Modal.Body><EditBatchForm id={props.id} action={sendForUpdate}/></Modal.Body>
        </Modal>
      </>
    );
  }
export default EditUserModal;
 