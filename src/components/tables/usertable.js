// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Table,
//   Button,
// } from "reactstrap";
// import { getAllUsers, deleteUser } from "../../services/apicalls/apicall";
// import { connect } from "react-redux";
// import "./tables.css";
// import EditUserModal from "../modals/editUserModal";
// import SearchUserForm from "../forms/serchUserForm";
// const NewUserTable = (props) => {
//   const [userDataState, setUserData] = useState({ userData: [] });
//   const setData = () => {
//     getAllUsers().then((resp) => {
//       setUserData({ userData: resp.data });
//     });
//   };
//   useEffect(() => {
//     setData();
//   }, []);
//   const onDeleteClick = (id) => {
//     deleteUser(id).then((resp) => {
//       setData();
//     });
//   };
//   const onEdit = () => {
//     setData();
//   };
//   return (
//     <div>
//       <Card className="mt-3">
//         <CardBody>
//           <CardTitle tag="h5">Users Listing</CardTitle>
//           <CardSubtitle className="mb-2 text-muted" tag="h6">
//             Details of users
//           </CardSubtitle>
//           <div className="border-top my-3" />
//           <SearchUserForm />
//           <div className="border-top my-3" />
//           <Table className="no-wrap mt-3 align-middle" responsive borderless>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Role</th>
//                 {props.role === "ADMIN" && <th>Actions</th>}
//               </tr>
//             </thead>
//             <tbody>
//               {userDataState.userData.map((user) => {
//                 return (
//                   <tr key={user.userid} className="border-top">
//                     <td>{user.userid}</td>
//                     <td>{user.userfirstname}</td>
//                     <td>{user.userlastname}</td>
//                     <td>{user.userrole}</td>
//                     {props.role === "ADMIN" && (
//                       <td>
//                         <EditUserModal id={user.userid} action={onEdit} />
//                         <Button
//                           className="btn btn-danger table-item-action-btn "
//                           onClick={() => {
//                             onDeleteClick(user.userid);
//                           }}
//                         >
//                           Delete
//                         </Button>
//                       </td>
//                     )}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </Table>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return { role: state.authData.role };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUserLoggedIn: (actionType, payLoad) => {
//       dispatch({ type: actionType, payLoad: payLoad });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(NewUserTable);
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { getAllUsers, deleteUser } from "../../services/apicalls/apicall";
import { connect } from "react-redux";
import "./tables.css";
import EditUserModal from "../modals/editUserModal";
import SearchUserForm from "../forms/serchUserForm";
import AddUserModal from "../modals/addUserModal";
import AddMultipleUserModal from "../modals/addMultipleUserModal";
import { Table, Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {insertNewUsers} from '../../services/apicalls/apicall';
// import * as XLSX from 'xlsx'

const NewUserTable = (props) => {
  const success = () => {
    toast.configure();
    toast.success(" User Deleted SuccessFully!", {
      position: "top-right",
      color: "red",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const [userDataState, setUserData] = useState({ userData: [] });
  const setData = () => {
    getAllUsers().then((resp) => {
      setUserData({ userData: resp.data });
    });
  };
  useEffect(() => {
    setData();
  }, []);
  const onDeleteClick = (id, e) => {
    deleteUser(id).then((resp) => {
      setData();
    });
  };
  const onEdit = () => {
    setData();
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "userid",
      sorter: (a, b) => a.userid.localeCompare(b.userid),
      // sortDirections: ['descend'],
    },
    {
      title: "First Name",
      dataIndex: "userfirstname",
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.userfirstname.localeCompare(b.userfirstname),
    },
    {
      title: "Last Name",
      dataIndex: "userlastname",
      sorter: (a, b) => a.userlastname.localeCompare(b.userlastname),
    },
    {
      title: "Role",
      dataIndex: "userrole",
      sorter: (a, b) => a.userrole.localeCompare(b.userrole),
      filters: [
        {
          text: "ADMIN",
          value: "ADMIN",
        },
        {
          text: "INSTRUCTOR",
          value: "INSTRUCTOR",
        },
        {
          text: "COORDINATOR",
          value: "COORDINATOR",
        },
      ],
      onFilter: (value, record) => record.userrole.includes(value),
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "userid",
      render: (text, record) => (
        <div>
          <EditUserModal id={record.userid} action={onEdit} />
        </div>
      ),
    },
    {
      title: "Delete",
      dataIndex: "",
      key: "userid",
      render: (text, record) => (
        <Popconfirm
          title="Are you sure to delete this user?"
          onConfirm={(e) => {
            onDeleteClick(record.userid, e);
            success();
          }}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined />
        </Popconfirm>
      ),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  // const [excelData, setExcelData] = useState(null);
  // const[ excelFile, setExcelFile] = useState(null);
  // const handleFile = (e)=>{
  //   let selectedFile = e.target.files[0];
  //   if(selectedFile){
  //     console.log(selectedFile.type)
  //     let reader =  new FileReader();
  //     reader.readAsArrayBuffer(selectedFile);
  //     reader.onload = (e)=>{
  //        setExcelFile(e.target.result);
  //     }
  //   }
  //   else{
  //     console.log("pls select the file")
  //   }
  // }
  
  // const [show, setShow] = useState(false);
  
  // const handleClose = () => setShow(false);

  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   if(excelFile!=null){
  //     const workbook = XLSX.read(excelFile,{type:'buffer'});
  //     const worksheetName = workbook.SheetNames[0];
  //     const workSheet = workbook.Sheets[worksheetName];
  //     const data = XLSX.utils.sheet_to_json(workSheet);
  //     setExcelData(data); 
  //     return insertNewUsers(data).then(resp => {
  //       handleClose();
  //      alert(`User created successfully!`);
  //   }).catch(err => {
  //       alert('Something went wrong!');
  //   });
  //   }else{
  //     setExcelData(null);
  //   }
  // }
  // console.log(excelData);
  return (
    <div>
            <AddUserModal>
          <Button className="btn-primary">Add User</Button>
        </AddUserModal>
          <AddMultipleUserModal >
          <Button className="btn-primary" style={{marginLeft:10}}>Add Multiple Users</Button>
          </AddMultipleUserModal>
          
      <Card className="mt-3">
        <CardBody>
          <CardTitle tag="h5">Users Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Details of users
          </CardSubtitle>
          <div className="border-top my-3" />
          <SearchUserForm />
          <div className="border-top my-3" />
          {/* <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                {props.role === "ADMIN" && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {userDataState.userData.map((user) => {
                return (
                  <tr key={user.userid} className="border-top">
                    <td>{user.userid}</td>
                    <td>{user.userfirstname}</td>
                    <td>{user.userlastname}</td>
                    <td>{user.userrole}</td>
                    {props.role === "ADMIN" && (
                      <td>
                        <EditUserModal id={user.userid} action={onEdit} />
                        <Button
                          className="btn btn-danger table-item-action-btn "
                          onClick={() => {
                            onDeleteClick(user.userid);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
          <Table
            columns={columns}
            dataSource={userDataState.userData}
            onChange={onChange}
          />
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { role: state.authData.role };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedIn: (actionType, payLoad) => {
      dispatch({ type: actionType, payLoad: payLoad });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserTable);
