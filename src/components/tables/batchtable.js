import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { connect } from "react-redux";
import {
  deleteBatch,
  getAllBatchs,
  getBatchInDuration,
  getAllBatchsByInstructor,
} from "../../services/apicalls/batchapicalls";
import "./tables.css";
import EditBatchModal from "../modals/editBatchModal";
import ViewBatchModal from "../modals/viewBatchModal";
import MarkAttendanceModal from "../modals/markAttendanceModal";
import AddParticipantsModal from "../modals/addParticipantsModal";
import PostAssessmentModal from "../modals/postAssessmentmodal";
import AddPostAssessmentModal from "../modals/addPostAssessmentModal";
import BatchDurationForm from "../forms/batchDuration";
import AssignmentModal from "../modals/assignmentmodal";
import AddBatchModal from "../modals/addBatchModal";
import { Table, Popconfirm, message } from "antd";
import BatchDropdownInput from "../utils/BatchDropdownInput";
import {
  DeleteOutlined,
  EditOutlined,
  CheckSquareOutlined,
  UserAddOutlined,
  DownloadOutlined,
  FileAddOutlined,
  FileMarkdownOutlined,
} from "@ant-design/icons";
const BatchTable = (props) => {
  const initialDuration = { from: "2022-01-01", to: "2023-01-01" };
  const [batchDataState, setBatchData] = useState({
    batchData: [],
    duration: initialDuration,
  });
  const setData = (duration) => {
    duration = { from: duration.from, to: duration.to };
    if (props.role === "INSTRUCTOR") {
      duration = {
        from: duration.from,
        to: duration.to,
        instructorname: props.userFirstName,
      };
    }
    if (props.role === "COORDINATOR") {
      duration = {
        from: duration.from,
        to: duration.to,
        coordinatorname: props.userFirstName,
      };
    }
    getBatchInDuration(duration).then((resp) => {
      setBatchData({ batchData: resp.data, duration: duration });
    });
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
      title: "ID",
      dataIndex: "batchid",
      sorter: (a, b) => a.batchid.localeCompare(b.batchid),
      // sortDirections: ['descend'],
    },
    {
      title: "Batch Name",
      dataIndex: "batchname",
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.batchname.localeCompare(b.batchname),
    },
    {
      title: "Instructor",
      dataIndex: "instructorname",
      sorter: (a, b) => a.instructorname.localeCompare(b.instructorname),
    },
    {
      title: "Coordinator",
      dataIndex: "coordinatorname",
      sorter: (a, b) => a.coordinatorname.localeCompare(b.coordinatorname),
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => (
        <div>
          <EditBatchModal
            batchid={record.batchid}
            action={() => setData(batchDataState.duration)}
          >
            <EditOutlined />
          </EditBatchModal>
        </div>
      ),
    },
    {
      title: "Delete",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => (
        <Popconfirm
          title="Are you sure to delete this Batch?"
          onConfirm={(e) => {
            onDeleteClick(record.batchid, e);
          }}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined />
        </Popconfirm>
      ),
    },
    {
      title: "View Participants",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => (
        <ViewBatchModal batchid={record.batchid}></ViewBatchModal>
      ),
    },
    {
      title: "Batch Details",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => navigateToPage(record),
    },
  ];
  const columnsCoordinator = [
    {
      title: "ID",
      dataIndex: "batchid",
      sorter: (a, b) => a.batchid.localeCompare(b.batchid),
      // sortDirections: ['descend'],
    },
    {
      title: "Batch Name",
      dataIndex: "batchname",
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.batchname.localeCompare(b.batchname),
    },
    {
      title: "Instructor",
      dataIndex: "instructorname",
      sorter: (a, b) => a.instructorname.localeCompare(b.instructorname),
    },
    {
      title: "Coordinator",
      dataIndex: "coordinatorname",
      sorter: (a, b) => a.coordinatorname.localeCompare(b.coordinatorname),
    },
    {
      title: "Add Participants",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => (
        <AddParticipantsModal batchid={record.batchid} action={() => setData()}>
          <UserAddOutlined />
        </AddParticipantsModal>
      ),
    },
    {
      title: "View Participants",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => (
        <ViewBatchModal batchid={record.batchid}></ViewBatchModal>
      ),
    },
    {
      title: "Attendance",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => (
        <MarkAttendanceModal batchid={record.batchid}>
          <CheckSquareOutlined />
        </MarkAttendanceModal>
      ),
    },
    {
      title: "Report",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => <DownloadOutlined />,
    },
  ];

  const columnsInstructor = [
    {
      title: "ID",
      dataIndex: "batchid",
      sorter: (a, b) => a.batchid.localeCompare(b.batchid),
      // sortDirections: ['descend'],
    },
    {
      title: "Batch Name",
      dataIndex: "batchname",
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.batchname.localeCompare(b.batchname),
    },
    {
      title: "Instructor",
      dataIndex: "instructorname",
      sorter: (a, b) => a.instructorname.localeCompare(b.instructorname),
    },
    {
      title: "Coordinator",
      dataIndex: "coordinatorname",
      sorter: (a, b) => a.coordinatorname.localeCompare(b.coordinatorname),
    },
    {
      title: "Post Assessment",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => (
        <PostAssessmentModal batchid={record.batchid}>
          <FileMarkdownOutlined />
        </PostAssessmentModal>
      ),
    },
    {
      title: "View Participants",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => (
        <ViewBatchModal batchid={record.batchid}></ViewBatchModal>
      ),
    },
    {
      title: "Assignment",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => (
        <AssignmentModal batchid={record.batchid}>
          <FileAddOutlined />
        </AssignmentModal>
      ),
    },
    {
      title: "Report",
      dataIndex: "",
      key: "batchid",
      render: (text, record) => <DownloadOutlined />,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  function navigateToPage(record) {
    return (
      <Link to="/batch-details" state={{ batch: record }}>
        <i className="bi bi-bar-chart-line"></i>
        <span className="ms-1 d-inline-block">Details</span>
      </Link>
    );
  }
  return (
    <div>
      <AddBatchModal>
        <Button className="btn-primary">Add Batch</Button>
      </AddBatchModal>
      <AddPostAssessmentModal>
        <Button className="btn-primary">Add Post Assessment</Button>
      </AddPostAssessmentModal>
      <Card className="mt-5">
        <CardBody>
          <BatchDurationForm
            from={initialDuration.from}
            to={initialDuration.to}
            action={(newDuration) => {
              setDuration(newDuration);
            }}
          />

          {props.role === "ADMIN" && (
            <Table
              columns={columnsAdmin}
              dataSource={batchDataState.batchData}
              onChange={onChange}
            />
          )}
          {props.role === "COORDINATOR" && (
            <div>
              <Table
                columns={columnsCoordinator}
                dataSource={batchDataState.batchData}
                onChange={onChange}
              />
            </div>
          )}
          {props.role === "INSTRUCTOR" && (
            <div>
              <Table
                columns={columnsInstructor}
                dataSource={batchDataState.batchData}
                onChange={onChange}
              />
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    role: state.authData.role,
    userFirstName: state.authData.userFirstName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedIn: (actionType, payLoad) => {
      dispatch({ type: actionType, payLoad: payLoad });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BatchTable);
