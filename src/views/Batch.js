import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { useEffect, useState } from "react";
import { getBatchDetails,getAllBatchs } from "../services/apicalls/batchapicalls";
import { getAllParticipants } from "../services/apicalls/participantapicalls";
import BatchDropdownInput from "../components/utils/BatchDropdownInput";
import Participanttable from "../components/tables/participanttable";
import MarkAttendanceModal from "../components/modals/markAttendanceModal";
import PostAssessmentModal from "../components/modals/postAssessmentmodal";
import AssignmentModal from "../components/modals/assignmentmodal";
const About = () => {
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
        <MarkAttendanceModal partData={batchDataState.partData} arrReportToday={batchDataState.arrReportToday} />
        <PostAssessmentModal partData={batchDataState.partData} batchid={batchDataState.currentBatchData.batchid} />
        <AssignmentModal partData={batchDataState.partData} batchid={batchDataState.currentBatchData.batchid} />
        
        </div>}
        </CardTitle>
        <CardBody className="p-4">
          <Row justify-content>
            <Col lg="12">
            <Participanttable ptData={batchDataState.partData} /> 
            </Col>
            <Col>
      </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  </Row>
  );
};

export default About;
