import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle,  Button } from "reactstrap";
import { connect } from "react-redux";
import {
  deleteBatch,
  getAllBatchs,
  getBatchInDuration,
  getAllBatchsByInstructor
} from "../../services/apicalls/batchapicalls";
import "./tables.css";
import EditBatchModal from "../modals/editBatchModal";
import ViewBatchModal from '../modals/viewBatchModal';
import MarkAttendanceModal from "../modals/markAttendanceModal";
import AddParticipantsModal from "../modals/addParticipantsModal";
import PostAssessmentModal from "../modals/postAssessmentmodal";
import { BsUiChecks } from "react-icons/bs";
import { BiCodeAlt, BiTask } from 'react-icons/bi'
import { FaUserPlus } from 'react-icons/fa'
import { HiDocumentReport } from "react-icons/hi";
import BatchDurationForm from "../forms/batchDuration";
import AssignmentModal from "../modals/assignmentmodal";
import AddBatchModal from "../modals/addBatchModal";
import { Table, Popconfirm, message } from 'antd';
import { DeleteOutlined, EditOutlined ,CheckSquareOutlined, UserAddOutlined, DownloadOutlined, FileAddOutlined, FileMarkdownOutlined} from "@ant-design/icons";
const BatchTable = (props) => {
  const initialDuration = { from: "2022-01-01", to: "2023-01-01" };
  const [batchDataState, setBatchData] = useState({ batchData: [], duration: initialDuration });
  console.log(props)
  const setData = (duration) => {
    if(props.role === "ADMIN" || props.role === "COORDINATOR" ){
    getBatchInDuration({ from: duration.from, to: duration.to }).then(
      (resp) => {
        setBatchData({ batchData: resp.data, duration: duration });
      }
    );
    }
    else if(props.role === "INSTRUCTOR"){
      getAllBatchsByInstructor(props.userFirstName).then(
        (resp) => {
          setBatchData({ batchData: resp.data, duration: batchDataState.duration});
          console.log(resp)
        }
      )
    }
  };
  const setDuration = (newDuration) => {
    setData(newDuration);
  };
  useEffect(() => {
    setData(initialDuration);
  }, []);
  const onDeleteClick = (id, e) => {
    deleteBatch(id).then((resp) => {
      setData();
    });
  };
  
  const columnsAdmin = [
    {
      title: 'ID',
      dataIndex: 'batchid',
      sorter: (a, b) =>a.batchid.localeCompare(b.batchid),
      // sortDirections: ['descend'],
    },
    {
      title: 'Batch Name',
      dataIndex: 'batchname',
      // defaultSortOrder: 'descend',
      sorter: (a, b) =>a.batchname.localeCompare(b.batchname),
    },
    {
      title: 'Instructor',
      dataIndex: 'instructorname',
      sorter: (a, b) =>a.instructorname.localeCompare(b.instructorname),
    },
    {
      title: 'Edit',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <div>
           <EditBatchModal batchid={record.batchid} action={setData(batchDataState.duration)} >
                          <EditOutlined/>
                        </EditBatchModal>
                        </div>
      ),
    },
    {
      title: 'Delete',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <Popconfirm
      title="Are you sure to delete this task?"
      onConfirm={(e) => {
        onDeleteClick(record.batchid,e);
      }}
      okText="Yes"
      cancelText="No"
    >
      
      <DeleteOutlined  />
    </Popconfirm>
      ),
    },
    {
      title: 'View Participants',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <ViewBatchModal batchid={record.batchid}>
                          </ViewBatchModal>
      ),
    },
  ];
  const columnsCoordinator = [
    {
      title: 'ID',
      dataIndex: 'batchid',
      sorter: (a, b) =>a.batchid.localeCompare(b.batchid),
      // sortDirections: ['descend'],
    },
    {
      title: 'Batch Name',
      dataIndex: 'batchname',
      // defaultSortOrder: 'descend',
      sorter: (a, b) =>a.batchname.localeCompare(b.batchname),
    },
    {
      title: 'Instructor',
      dataIndex: 'instructorname',
      sorter: (a, b) =>a.instructorname.localeCompare(b.instructorname),
    },
    {
      title: 'Add Participants',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <AddParticipantsModal batchid={record.batchid} action={setData} >
                          <UserAddOutlined />
                        </AddParticipantsModal>
      ),
    },
    {
      title: 'View Participants',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <ViewBatchModal batchid={record.batchid}>
                          </ViewBatchModal>
      ),
    },
    {
      title: 'Attendance',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <MarkAttendanceModal batchid={record.batchid}>
                          <CheckSquareOutlined />
                        </MarkAttendanceModal>
      ),
    },
    {
      title: 'Report',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <DownloadOutlined />
      ),
    },
  ];

  const columnsInstructor = [
    {
      title: 'ID',
      dataIndex: 'batchid',
      sorter: (a, b) =>a.batchid.localeCompare(b.batchid),
      // sortDirections: ['descend'],
    },
    {
      title: 'Batch Name',
      dataIndex: 'batchname',
      // defaultSortOrder: 'descend',
      sorter: (a, b) =>a.batchname.localeCompare(b.batchname),
    },
    {
      title: 'Instructor',
      dataIndex: 'instructorname',
      sorter: (a, b) =>a.instructorname.localeCompare(b.instructorname),
    },
    {
      title: 'Post Assessment',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <PostAssessmentModal batchid={record.batchid} >
                          <FileMarkdownOutlined />
                        </PostAssessmentModal>
      ),
    },
     {
      title: 'View Participants',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <ViewBatchModal batchid={record.batchid}>
                          </ViewBatchModal>
      ),
    },
    {
      title: 'Assignment',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <AssignmentModal batchid={record.batchid}>
                          <FileAddOutlined />
                        </AssignmentModal>
      ),
    },
    {
      title: 'Report',
      dataIndex: '',
      key: 'batchid',
      render: (text, record) => (
        <DownloadOutlined />
      ),
    },
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  // console.log(batchDataState.batchData);
  return (
    <div>
      <AddBatchModal>
        <Button className="btn-primary">Add Batch</Button>
      </AddBatchModal>
      <Card className="mt-5">
        <CardBody>
          {/* <BatchDurationForm
            from={initialDuration.from}
            to={initialDuration.to}
            action={(newDuration) => {
              setDuration(newDuration);
            }}
          /> */}
          {/* <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>ID</th>
                <th>Batch Name</th>
                <th>Instructor</th>
                {(props.role === "ADMIN" || props.role === "INSTRUCTOR") && (
                  <th>Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {batchDataState.batchData.map((batch) => {
                return (
                  <tr key={batch.batchid} className="border-top">
                    <td>{batch.batchid}</td>
                    <td>{batch.batchname}</td>
                    <td>{batch.instructorname}</td>
                    {props.role === "ADMIN" && (
                      <td>
                        <EditBatchModal batchid={batch.batchid} action={setData(batchDataState.duration)} >
                          <Button className="btn btn-primary">Edit</Button>
                        </EditBatchModal>
                        <Button
                          className="table-item-action-btn"
                          onClick={() => {
                            onDeleteClick(batch.batchid);
                          }}
                        >
                          Delete
                        </Button>
                        <ViewBatchModal batchid={batch.batchid}>
                          </ViewBatchModal>
                      </td>
                    )}
                    {props.role === "COORDINATOR" && (
                      <td>
                        <AddParticipantsModal batchid={batch.batchid} action={setData} >
                          <Button className="btn btn-primary table-item-action-btn">
                            <FaUserPlus />
                          </Button>
                        </AddParticipantsModal>
                        <MarkAttendanceModal batchid={batch.batchid}>
                          <Button className="btn-primary table-item-action-btn">
                            <BsUiChecks />
                          </Button>
                        </MarkAttendanceModal>
                        <Button className="btn-primary table-item-action-btn">
                          <HiDocumentReport />
                        </Button>
                      </td>
                    )}
                    {props.role === "INSTRUCTOR" && (
                      <td>
                        <PostAssessmentModal batchid={batch.batchid} >
                          <Button className="btn btn-primary table-item-action-btn">
                            <BiCodeAlt />
                          </Button>
                        </PostAssessmentModal>
                        <AssignmentModal batchid={batch.batchid}>
                          <Button className="btn-primary table-item-action-btn">
                            <BiTask />
                          </Button>
                        </AssignmentModal>
                        <Button className="btn-primary table-item-action-btn">
                          <HiDocumentReport />
                        </Button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
          {props.role === "ADMIN" && (
            
          <Table columns={columnsAdmin} dataSource={batchDataState.batchData} onChange={onChange} />
          )}
          {props.role === "COORDINATOR" && (
            <div>
          <Table columns={columnsCoordinator} dataSource={batchDataState.batchData} onChange={onChange} />
          </div>
          )}
          {props.role === "INSTRUCTOR" && (
            <div>
          <Table columns={columnsInstructor} dataSource={batchDataState.batchData} onChange={onChange} />
          </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { role: state.authData.role , userFirstName:state.authData.userFirstName};
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedIn: (actionType, payLoad) => {
      dispatch({ type: actionType, payLoad: payLoad });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BatchTable);