import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import NewParticipantForm from "../forms/editParticipantForm";
import { insertNewParticipant } from "../../services/apicalls/participantapicalls";
import { EditOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditParticipant = (props) => {
  const success = () => {
    toast.configure();
    toast.success(" Participant Edited SuccessFully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const fail = () => {
    toast.configure();
    toast.error("Something went wrong!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendForUpdate = (data) => {
    insertNewParticipant(props.id, data)
      .then((resp) => {
        handleClose();
        props.action();
        success();
      })
      .catch((err) => {
        handleClose();
        fail();
      });
  };
  return (
    <>
      {/* <Button variant="success" onClick={handleShow}>
        Edit
      </Button> */}
      <EditOutlined onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Participant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewParticipantForm id={props.id} action={sendForUpdate} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default EditParticipant;
