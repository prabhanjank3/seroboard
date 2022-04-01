import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { useEffect, useState } from "react";
import { getPostAssessmentRecord } from "../services/apicalls/postassrecapicalls";
import { getAllPostAssessment } from "../services/apicalls/postassapicalls";
import PostAssessDropdownInput from "../components/utils/PostAssessmentDropdown";
import PostAssessTable from "../components/tables/PostAttendanceTable";

const PostAssessmentContainer = (props) => {
  const [passState, setPassState] = useState({currentPostassid:'',postassdata:[],scoreData:[],showtable:false});
  const setPostAssessmentDetails= (postassid) => {
    getPostAssessmentRecord(postassid).then(resp => {
        setPassState({...passState, currentPostassid:postassid,scoreData:resp.data,showtable:true}) 
    })
  };
  useEffect(() => {
    getAllPostAssessment(props.batchid).then(resp => {
        setPassState({...passState,postassdata:resp.data});
    })
  },[])
  return (
    <Row>
    <Col>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        <PostAssessDropdownInput options={passState.postassdata} title='Select Post Assessment' onChange={(e) => setPostAssessmentDetails(e.target.value)} />
        </CardTitle>
        {(passState.showtable) && <CardBody className="p-4">
          <Row justify-content>
            <Col lg="12">
             <PostAssessTable partData={props.partData} scores={passState.scoreData} postassid={passState.currentPostassid} action={props.action} /> 
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

export default PostAssessmentContainer;
