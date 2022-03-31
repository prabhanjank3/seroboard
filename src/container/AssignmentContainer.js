import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { useEffect, useState } from "react";
import { getAssignmentRecord } from "../services/apicalls/assignmentrecapicalls";
import { getAllAssignment } from "../services/apicalls/assignmentapicalls";
import AssignmentDropdownInput from "../components/utils/AssignmentDropdown";
import PostAssessTable from "../components/tables/PostAttendanceTable";

const PostAssessmentContainer = (props) => {
  const [passState, setPassState] = useState({currentPostassid:'',postassdata:[],scoreData:[]});
  const setPostAssessmentDetails= (postassid) => {
    getAssignmentRecord(postassid).then(resp => {
        setPassState({...passState, currentPostassid:postassid,scoreData:resp.data}) 
    })
  };
  useEffect(() => {
    getAllAssignment(props.batchid).then(resp => {
        setPassState({...passState,postassdata:resp.data});
    })
  },[])
  return (
    <Row>
    <Col>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        <AssignmentDropdownInput options={passState.postassdata} title='Select Assignment' onChange={(e) => setPostAssessmentDetails(e.target.value)} />
        </CardTitle>
        <CardBody className="p-4">
          <Row justify-content>
            <Col lg="12">
            { <PostAssessTable partData={props.partData} scores={passState.scoreData} postassid={passState.currentPostassid} action={props.action} /> }
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

export default PostAssessmentContainer;
