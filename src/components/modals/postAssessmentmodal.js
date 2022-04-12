import React, {useState, useEffect} from "react";
import {Modal, Button} from 'react-bootstrap';
import PostAssessmentContainer from '../../container/PostAssessmentContainer';
import {markPostAssessmentScore} from '../../services/apicalls/postassrecapicalls';
import { getAllParticipants } from "../../services/apicalls/participantapicalls";
import {Link, useNavigate} from 'react-router-dom';
import AddPostAssessmentModal from './addPostAssessmentModal'
import './modal.css'
const PostAssessmentModal = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [partData,setPartData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const insertAction = (data) => {
        return markPostAssessmentScore(data).then(resp => {
            handleClose();
           alert(`Scores submitted!`);
        }).catch(err => {
            alert('Something went wrong!');
        });
   }
   useEffect(() => {
    getAllParticipants(props.batchid).then(resp => {
        setPartData(resp.data)
    });
  },[]) 
    return (
      <>
        
        <span className="batch-action-btn" onClick={handleShow}>
            {props.children}
        </span>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post Assessment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PostAssessmentContainer partData={partData} batchid={props.batchid} action={insertAction} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
export default PostAssessmentModal;
 