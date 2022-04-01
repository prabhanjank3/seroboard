import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import AddUser from '../../components/forms/newUserForm';
import {insertNewUser} from '../../services/apicalls/apicall';
import {Link, useNavigate} from 'react-router-dom';
const AddUserModal = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const insertAction = (data) => {
        return insertNewUser(data).then(resp => {
            handleClose();
           alert(`User created successfully!`);
        }).catch(err => {
            alert('Something went wrong!');
        });
   }
    return (
      <>
        <span onClick={handleShow}>
            {props.children}
        </span>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body><AddUser action={(data) => insertAction(data).then(() => navigate('/'))} /></Modal.Body>
        </Modal>
      </>
    );
  }
export default AddUserModal;
 