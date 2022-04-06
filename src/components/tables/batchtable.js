import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import {
  deleteBatch,
  getAllBatchs,
  getBatchInDuration,
} from "../../services/apicalls/batchapicalls";
import "./tables.css";
import EditBatchModal from "../modals/editBatchModal";
import MarkAttendanceModal from "../modals/markAttendanceModal";
import AddParticipantsModal from "../modals/addParticipantsModal";
import PostAssessmentModal from "../modals/postAssessmentmodal";
import { BsUiChecks } from "react-icons/bs";
import { BiCodeAlt, BiTask } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import BatchDurationForm from "../forms/batchDuration";
import AssignmentModal from "../modals/assignmentmodal";
const BatchTable = (props) => {
  const initialDuration = { from: "2022-01-01", to: "2023-01-01" };
  const [batchDataState, setBatchData] = useState({
    batchData: [],
    duration: initialDuration,
  });
  const setData = (duration) => {
    getBatchInDuration({ from: duration.from, to: duration.to }).then(
      (resp) => {
        console.log(resp);
        // setBatchData({ batchData: resp.data, duration: duration });
      }
    );
  };
  const setDuration = (newDuration) => {
    setData(newDuration);
  };
  useEffect(() => {
    setData(initialDuration);
  }, []);
  const onDeleteClick = (id) => {
    deleteBatch(id).then((resp) => {
      setData();
    });
  };
  return (
    <div>
      <Card className="mt-5">
        <CardBody>
          <BatchDurationForm
            from={initialDuration.from}
            to={initialDuration.to}
            action={(newDuration) => {
              setDuration(newDuration);
            }}
          />
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
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
                        <EditBatchModal
                          batchid={batch.batchid}
                          action={setData(batchDataState.duration)}
                        >
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
                      </td>
                    )}
                    {props.role === "COORDINATOR" && (
                      <td>
                        <AddParticipantsModal
                          batchid={batch.batchid}
                          action={setData}
                        >
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
                        <PostAssessmentModal batchid={batch.batchid}>
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
          </Table>
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
export default connect(mapStateToProps, mapDispatchToProps)(BatchTable);
