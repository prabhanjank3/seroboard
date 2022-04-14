import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UploadParticipantDataWithExcel from "../forms/uploadParticipantDataWithExcel";
const ViewBatchModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);}
  return (<>
      <Button className="btn" color="info" onClick={handleShow}>
                  Participants Bulk Upload
                </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bulk Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UploadParticipantDataWithExcel />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ViewBatchModal;