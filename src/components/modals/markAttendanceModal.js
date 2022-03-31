import React, {useEffect, useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import AttendanceForm from "../forms/attendanceForms";
import {getAttendanceData, submitAttendanceReport} from '../../services/apicalls/attendanceapicalls';
import { getAllParticipants } from "../../services/apicalls/participantapicalls";
import { getDateInputFormat } from "../../services/commonFunctions";
import { useNavigate } from "react-router";
import './modal.css';
const MarkAttendanceModal = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    let [attData,setAttDate] = useState({date:getDateInputFormat(new Date().toISOString()), attReportData:[],partData:[]});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const onDateChange = (newDate) => {
        getAttendanceData({date:newDate,batchid:props.batchid}).then(resp => {
            let arr = resp.data.map(obj => obj.participantid);
            setAttDate({...attData,attReportData:arr,date:getDateInputFormat(new Date(newDate).toISOString())});
        })
    }
    const submitAttendanceReportAction = (data) => {
        submitAttendanceReport(data,props.batchid).then(resp => {
            alert('Marked!')
        }).catch(err => {
            alert('Something went wrong!')
        });
        handleClose();
    }
    useEffect(() => {
      getAllParticipants(props.batchid).then(resp => {
          setAttDate({...attData,partData:resp.data})
      });
    },[])  
    return (
      <>
        <span className="batch-action-btn" onClick={handleShow}>
            {props.children}
        </span>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mark Attendance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>
              <input type="date" id='dateInput' className="attendance-date-input" /*value={attData.date}*/ onChange={(e) => onDateChange(e.target.value)} placeholder={attData.date} />
              <AttendanceForm partData={attData.partData} attReportData={attData.attReportData} date={attData.date} action={(data) => submitAttendanceReportAction(data)} />
              </div>
            </Modal.Body>
        </Modal>
      </>
    );
  }
export default MarkAttendanceModal;
 