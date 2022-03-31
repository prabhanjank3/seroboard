import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { useEffect, useState } from "react";
import { getBatchDetails,getAllBatchs } from "../services/apicalls/batchapicalls";
import { getAllParticipants } from "../services/apicalls/participantapicalls";
import BatchDropdownInput from "../components/utils/BatchDropdownInput";
import Participanttable from "../components/tables/participanttable";
import MarkAttendanceModal from "../components/modals/markAttendanceModal";
import PostAssessmentModal from "../components/modals/postAssessmentmodal";
import AssignmentModal from "../components/modals/assignmentmodal";
import AddParticipantModal from '../components/modals/addParticipantsModal';
import AddBatchModal from '../components/modals/addBatchModal';
import EditBatchModal from '../components/modals/editBatchModal';
import { connect } from "react-redux";
const About = (props) => {
  const [batchDataState, setBatchDataState] = useState({currentBatchData:{}, partData:[], allBatchData:[],showPtTable:false,arrReportToday:[]});
  const setBatchDetails = (batchid) => {
    getBatchDetails(batchid).then(resp => {
        batchDataState['currentBatchData']=resp.data[0];
        setBatchDataState(batchDataState)
    }).then(() => {
        getAllParticipants(batchid).then(resp => {
            setBatchDataState({...batchDataState,partData:resp.data})
        });
    })
  };
  useEffect(() => {
    getAllBatchs().then(resp => {
        setBatchDataState({...batchDataState,allBatchData:resp.data});
    })
  },[])
  return (
    <Row>
    <Col>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        <BatchDropdownInput options={batchDataState.allBatchData} title='Select Batch' onChange={(e) => setBatchDetails(e.target.value)} />
        </CardTitle>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        {(batchDataState.partData.length !=0 ) && 
        <div>
        {
        (props.role === 'ADMIN') && <span>
            <AddBatchModal>
                <Button className="btn-primary">
                Add Batch
                </Button>
            </AddBatchModal>
            <EditBatchModal batchid={batchDataState.currentBatchData.batchid}>
            <Button className="btn-primary">
                Edit Batch
                </Button>
            </EditBatchModal>
        </span>
        }
        {(props.role == 'ADMIN' || props.role == 'COORDINATOR') &&  <span>
        <AddParticipantModal batchid={batchDataState.currentBatchData.batchid}>
        <Button className="btn-primary">
            Add Participant
        </Button>
        </AddParticipantModal>
        <MarkAttendanceModal batchid={batchDataState.currentBatchData.batchid}>
        <Button className="btn-primary">
            Mark Attendance
        </Button>
        </MarkAttendanceModal>
        </span>}
        {(props.role == 'ADMIN' || props.role == 'INSTRUCTOR') && <span>
        <PostAssessmentModal batchid={batchDataState.currentBatchData.batchid}>
        <Button className="btn-primary" >
            Post Assessment
        </Button>
        </PostAssessmentModal>
        <AssignmentModal batchid={batchDataState.currentBatchData.batchid}>
        <Button className="btn-primary">
            Assignments
        </Button>
        </AssignmentModal>
        <AddParticipantModal id={batchDataState.currentBatchData.batchid}/>
        </span>}
        </div>}
        </CardTitle>
        {(batchDataState.partData.length!=0) && <CardBody className="p-4">
          <Row justify-content>
            <Col lg="12">
            <Participanttable ptData={batchDataState.partData} /> 
            </Col>
            <Col>
      </Col>
          </Row>
        </CardBody>}
      </Card>
    </Col>
  </Row>
  );
};
const mapStateToProps = (state) => {
    return {
        role: state.authData.role,
        
    };
  };

export default connect(mapStateToProps)(About)

