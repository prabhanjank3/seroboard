import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import AddBatch from '../../components/forms/newBatchForms';
import {insertNewBatch} from '../../services/apicalls/batchapicalls';
import {Link, useNavigate} from 'react-router-dom';
const AddUserModal = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const insertAction = (data) => {
        return insertNewBatch(data).then(resp => {
            handleClose();
           alert(`Batch created successfully!`);
        }).catch(err => {
            alert('Something went wrong!');
        });
   }
    return (
      <>
        <p onClick={handleShow}>
            Add Batch
        </p>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body><AddBatch action={(data) => insertAction(data).then(() => navigate('/'))} /></Modal.Body>
        </Modal>
      </>
    );
  }
export default AddUserModal;
 