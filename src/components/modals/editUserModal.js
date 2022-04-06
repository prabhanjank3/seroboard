import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import EditUserForm from "../forms/editUserForm";
import { updateUser } from "../../services/apicalls/apicall";
import {EditOutlined} from "@ant-design/icons"
const EditUserModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendForUpdate = (data) => {
    updateUser(props.id, data)
      .then((resp) => {
        handleClose();
        props.action();
      })
      .catch((err) => {
        handleClose();
        alert("Something went wrong!");
      });
  };
  return (
    <>
      {/* <Button variant="success" onClick={handleShow}>
        Edit
      </Button> */}
      <EditOutlined onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm id={props.id} action={sendForUpdate} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default EditUserModal;
