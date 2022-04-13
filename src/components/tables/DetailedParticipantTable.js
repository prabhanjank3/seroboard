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
import { getBatchDetails } from "../../services/apicalls/batchapicalls";

const DetailedParticipantTable = (props) => {
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
  const setparticipantData = () => {
    getAllParticipantswithoutid().then((resp) => {
      setParticipantData({ participantData: resp.data });
      nobatch(resp.data)
    });
  };

  // console.log(participantDataState)
  let allParticipantArray = []
  function nobatch(array){

    array.forEach(element => {
      if (element.batchname != null) {
       allParticipantArray.push(element)
      }
      else{
        element.batchname = "Batch not assigned"
        allParticipantArray.push(element)
      }
    });
  //   setParticipantData({ participantData: allParticipantArray });
  //   console.log(participantDataState)
   }
   console.log(allParticipantArray)

  // let finalPartiDetail = []
  // const setparticipantData = () => {
  //   getAllParticipantswithoutid().then((resp) => {
  //     setParticipantData({ participantData: resp.data });
  //     finalPartiDetail = allParticipantDetails(resp.data);
  //     mapParticipantDetails(finalPartiDetail, participantDataState.participantData)
  //     // console.log(finalPartiDetail)

  //   });
  // };
  // console.log(finalPartiDetail)
  

  // function allParticipantDetails(array) {
  //   let batchDetails = {}
  //   let participantObject = {};
  //   let newarray = []
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //     getBatchDetails(element.participantbatchid).then((resp) => {
  //       if (resp.data.length) {
  //         participantObject = resp.data[0];
  //         batchDetails = {
  //           batchid: participantObject.batchid,
  //           batchname: participantObject.batchname
  //         }
  //         newarray.push(batchDetails)
  //       }
  //     });
  //   }

  //   return(newarray)

  // };

  // console.log(participantDataState.participantData)
  // console.log(finalPartiDetail)

  // function matchBatchid(participantbatchid){
  //   if (participantbatchid == batchid) {
  //   }
  // }

  // function mapParticipantDetails(array1, array2){
  //   console.log(array1, array2)
  //   // console.log(array1[0].batchid, array2[0].participantbatchid)
  //   let lastarray = []
  //   let lastParticipantObject = {}
  //   for (let index = 0; index < array2.length; index++) {
  //     const element = array2[index];
  //     console.log(element.participantbatchid)
  //     array1.find()
  //   }
  // }

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
      title: "ID",
      dataIndex: "participantid",
      sorter: (a, b) => a.participantid.localeCompare(b.participantid),
      // sortDirections: ['descend'],
    },
    {
      title: "First Name",
      dataIndex: "participantfirstname",
      // defaultSortOrder: 'descend',
      sorter: (a, b) =>
        a.participantfirstname.localeCompare(b.participantfirstname),
    },
    {
      title: "Last Name",
      dataIndex: "participantlastname",
      sorter: (a, b) =>
        a.participantlastname.localeCompare(b.participantlastname),
    },
    {
      title: "Batch",
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
    {
      title: "Edit",
      dataIndex: "",
      key: "participantid",
      render: (text, record) => (
        <div>
          <EditParticipant
            id={record.participantid}
            action={onEditParticipant}
          />
        </div>
      ),
    },
    {
      title: "Delete",
      dataIndex: "",
      key: "participantid",
      render: (text, record) => (
        <Popconfirm
          title="Are you sure to delete this Participant?"
          onConfirm={(e) => {
            onDeleteClickParticipant(record.participantid, e);
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

  return (
    <div>
      <AddParticipantModal>
        <Button className="btn-primary">Add Participant</Button>
      </AddParticipantModal>
      <Card className="mt-3">
        <CardBody>
          <CardTitle tag="h5">Participants List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Details of users
          </CardSubtitle>
          <div className="border-top my-3" />
          <SearchUserForm />
          <div className="border-top my-3" />

          <Table
            columns={columns}
            dataSource={participantDataState.participantData}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedParticipantTable);
