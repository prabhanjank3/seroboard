import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import AttendanceForm from "../forms/attendanceForms";
import {getAttendanceData} from '../../services/apicalls/attendanceapicalls';
import { getDateInputFormat } from "../../services/commonFunctions";
import './modal.css';
const EditUserModal = (props) => {
    const [show, setShow] = useState(false);
    const [attData,setAttDate] = useState({date:getDateInputFormat(new Date().toISOString()), attReportData:[]})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onDateChange = (newDate) => {
        getAttendanceData({date:newDate,batchid:props.partData[0].participantbatchid}).then(resp => {
            setAttDate({...attData,attReportData:resp.data,date:getDateInputFormat(new Date(newDate).toISOString())});
        })
    }
    const submitAttendanceReport = (data) => {
        console.log(data)
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Mark Attendance
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mark Attendance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>
              <input type="date" className="attendance-date-input" value={attData.date} onChange={(e) => onDateChange(e.target.value)} placeholder={attData.date} />
              <AttendanceForm partData={props.partData} attReportData={attData.attReportData} date={attData.date} action={submitAttendanceReport} />
              </div>
            </Modal.Body>
        </Modal>
      </>
    );
  }
export default EditUserModal;
 