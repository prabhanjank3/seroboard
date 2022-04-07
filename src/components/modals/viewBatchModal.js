import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Batch from '../../views/Batch'
import { EyeOutlined } from "@ant-design/icons";
const ViewBatchModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <Button variant="info" onClick={handleShow}>
        View
      </Button> */}
      <EyeOutlined onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View batch details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Batch batchid={props.batchid}/>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ViewBatchModal;