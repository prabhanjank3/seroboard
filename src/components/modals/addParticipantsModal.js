import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import AddParticipantsForm from '../forms/addParticipants';
import {updateUser} from '../../services/apicalls/apicall';
import {FaUserPlus, BsUiChecks} from 'react-icons/fa'
const EditUserModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendForUpdate = (data) => {
        updateUser(props.id,data).then(resp => {
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
            <FaUserPlus />
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add AddParticipants</Modal.Title>
          </Modal.Header>
          <Modal.Body><AddParticipantsForm id={props.id} /></Modal.Body>
        </Modal>
      </>
    );
  }
export default EditUserModal;
 