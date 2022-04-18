import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import AddUser from '../../components/forms/newUserForm';
import {insertNewUser} from '../../services/apicalls/apicall';
import {Link, useNavigate} from 'react-router-dom';
import * as XLSX from 'xlsx';
import {insertNewUsers} from '../../services/apicalls/apicall';
const AddMultipleUserModal = (props) => {
    console.log(props);
    const navigate = useNavigate();
    const handleShow = () => setShow(true);
  const [excelData, setExcelData] = useState(null);
  const[ excelFile, setExcelFile] = useState(null);

  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      console.log(selectedFile.type)
      let reader =  new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload = (e)=>{
         setExcelFile(e.target.result);
      }
    }
    else{
      console.log("pls select the file")
    }
  }
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);

  const handleUpload = (e)=>{
    e.preventDefault();
    if(excelFile!=null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const workSheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(workSheet);
      setExcelData(data); 
    }else{
      setExcelData(null);
    }
  }

  const handleSubmit =(e)=>{
      e.preventDefault();
         return insertNewUsers(excelData).then(resp => {
        handleClose();
       alert(`User created successfully!`);
       props.setData();
    //    navigate('/starter');

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
            <Modal.Title>Add Multiple Users</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {/* <AddUser action={(data) => insertAction(data).then(() => navigate('/'))} /> */}
              <div className="form">
        <form className="form-group" autoComplete="off" onSubmit={handleSubmit}>
          <br></br>
          <input type='file' className='form-control ' required onChange={handleFile}></input>
          <button type="button" className="btn btn-success" style={{marginTop:5+'px', marginBottom:5}} onClick={handleUpload}>Upload</button>
          <br></br>
        
        <hr></hr>
        <h5> View The Uploaded file</h5>
        <div className="viewer">
            {excelData===null &&<>No File Selected</>}
            {excelData!==null &&(
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                        {excelData.map((user) => {
                return (
                  <tr key={user.useremail} className="border-top">
                    <td>{user.userfirstname}</td>
                    <td>{user.userlastname}</td>
                    <td>{user.useremail}</td>
                    <td>{user.userpassword}</td>
                    <td>{user.userrole}</td>
                  </tr>
                );
              })}
                        </tbody>
                        </table>
                </div>
            )}
            </div>
            <button type="submit" className="btn btn-success" style={{marginTop:5+'px', marginBottom:5}} >Submit</button>
            </form>
        </div>
              </Modal.Body>
        </Modal>
      </>
    );
  }
export default AddMultipleUserModal;
 