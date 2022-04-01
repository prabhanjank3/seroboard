import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import PostAssessmentContainer from '../../container/PostAssessmentContainer';
import {markPostAssessmentScore} from '../../services/apicalls/postassrecapicalls';
import {Link, useNavigate} from 'react-router-dom';
import './modal.css'
const PostAssessmentModal = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const insertAction = (data) => {
        console.log(data)
        return markPostAssessmentScore(data).then(resp => {
            handleClose();
           alert(`Scores submitted!`);
        }).catch(err => {
            alert('Something went wrong!');
        });
   }
    return (
      <>
        <Button className="batch-action-btn" onClick={handleShow}>
            Post Assessment
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body><PostAssessmentContainer partData={props.partData} batchid={props.batchid} action={insertAction} /></Modal.Body>
        </Modal>
      </>
    );
  }
export default PostAssessmentModal;
 