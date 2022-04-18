import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { getAllUsers, deleteUser } from "../../services/apicalls/apicall";
import {
  getAllParticipantswithoutid,
  deleteParticipant,
} from "../../services/apicalls/participantapicalls";
import { connect } from "react-redux";
import "./tables.css";
import EditUserModal from "../modals/editUserModal";
import SearchUserForm from "../forms/serchUserForm";
import AddUserModal from "../modals/addUserModal";
import "antd/dist/antd.css";
import { Table, Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditParticipant from "../modals/editParticipant";
import AddParticipantModal from "../modals/addParticipantsModal";
import ViewBatchModal from '../modals/viewBatchModal';
import { getBatchDetails } from "../../services/apicalls/batchapicalls";
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import AddHelp from "../modals/addHelp"



const Helpdesk = (props) => {
  const navigate = useNavigate();
  

  const success = () => {
    toast.configure();
    toast.success(" Participant Deleted SuccessFully!", {
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

  const [participantDataState, setParticipantData] = useState({
    participantData: [],
  });

  const [data, setData] = useState([]);

  const setparticipantData = () => {
    getAllParticipantswithoutid().then((resp) => {
      setParticipantData({ participantData: resp.data });
      setData(nobatch(resp.data));
    });
  };

  function nobatch(array) {
    let allParticipantArray = [];
    array.forEach((element) => {
      if (element.batchname != null) {
        allParticipantArray.push(element);
      } else {
        element.batchname = "Not Assigned";
        allParticipantArray.push(element);
      }
    });
    return allParticipantArray;
  }

  useEffect(() => {
    setparticipantData();
  }, []);

  const onDeleteClickParticipant = (id, e) => {
    deleteParticipant(id).then((resp) => {
      setparticipantData();
    });
  };
  const onEditParticipant = () => {
    setparticipantData();
  };
  const columns = [
    {
      title: "Category",
      dataIndex: "participantid",
      sorter: (a, b) => a.participantid.localeCompare(b.participantid),
      // sortDirections: ['descend'],
    },
    {
      title: "Subject",
      dataIndex: "participantfirstname",
      // defaultSortOrder: 'descend',
      sorter: (a, b) =>
        a.participantfirstname.localeCompare(b.participantfirstname),
    },
    {
      title: "Date",
      dataIndex: "participantlastname",
      sorter: (a, b) =>
        a.participantlastname.localeCompare(b.participantlastname),
    },
    {
      title: "Status",
      dataIndex: "batchname",
      sorter: (a, b) => a.batchname.localeCompare(b.batchname),
      // filters: [
      //   {
      //     text: "ADMIN",
      //     value: "ADMIN",
      //   },
      //   {
      //     text: "INSTRUCTOR",
      //     value: "INSTRUCTOR",
      //   },
      //   {
      //     text: "COORDINATOR",
      //     value: "COORDINATOR",
      //   },
      // ],
      // onFilter: (value, record) => record.userrole.includes(value),
    },
    // {
    //   title: "Edit",
    //   dataIndex: "",
    //   key: "participantid",
    //   render: (text, record) => (
    //     <div>
    //       <EditParticipant
    //         id={record.participantid}
    //         action={onEditParticipant}
    //       />
    //     </div>
    //   ),
    // },
    // {
    //   title: "Delete",
    //   dataIndex: "",
    //   key: "participantid",
    //   render: (text, record) => (
    //     <Popconfirm
    //       title="Are you sure to delete this Participant?"
    //       onConfirm={(e) => {
    //         onDeleteClickParticipant(record.participantid, e);
    //         success();
    //       }}
    //       okText="Yes"
    //       cancelText="No"
    //     >
    //       <DeleteOutlined />
    //     </Popconfirm>
    //   ),
    // },
    {
      title: 'View',
      dataIndex: '',
      key: 'participantid',
      render: (text, record) => (
        <div>
     <Link to="/participantdetail" state={{ batch: record }}>
        <EyeOutlined />
      </Link>
        </div>
      )
    },
  ];



  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  

  return (
    <div>
      <AddHelp>
        <Button className="btn-primary">Add Request</Button>
      </AddHelp>
      <Card className="mt-3">
        <CardBody>
          <CardTitle tag="h5">Ticket List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Details of Raised Ticket
          </CardSubtitle>
          <div className="border-top my-3" />
          <SearchUserForm />
          <div className="border-top my-3" />

          <Table columns={columns} dataSource={data} onChange={onChange} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Helpdesk);
