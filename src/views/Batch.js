import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { useEffect, useState } from "react";
import { getBatchDetails,getAllBatchs } from "../services/apicalls/batchapicalls";
import { getAllParticipants } from "../services/apicalls/participantapicalls";
import BatchDropdownInput from "../components/utils/BatchDropdownInput";
import Participanttable from "../components/tables/participanttable";
import MarkAttendanceModal from "../components/modals/markAttendanceModal";
const About = () => {
  const [batchDataState, setBatchDataState] = useState({currentBatchData:{}, partData:[], allBatchData:[]});
  const setBatchDetails = (batchid) => {
      
    getBatchDetails(batchid).then(resp => {
        setBatchDataState({...batchDataState,currentBatchData:resp.data[0]});
    }).then(() => {
        getAllParticipants(batchid).then(resp => {
            console.log(resp.data)
            setBatchDataState({...batchDataState,partData:resp.data})
        });
    });
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
        <MarkAttendanceModal partData={batchDataState.partData} />
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
