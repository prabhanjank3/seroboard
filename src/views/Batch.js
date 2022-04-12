import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { useEffect, useState } from "react";
import {
  getBatchDetails
} from "../services/apicalls/batchapicalls";
import { getAllParticipants } from "../services/apicalls/participantapicalls";
import Participanttable from "../components/tables/participanttable";
import Batchinfo from "../components/display/batchinfo";
const Batch = (props) => {
  const{ batchid } = props
  const [batchDataState, setBatchDataState] = useState({
    currentBatchData: {},
    partData: [],
    allBatchData: [],
    showPtTable: false,
    arrReportToday: [],
  });
  const setBatchDetails = (batchid) => {
    getBatchDetails(batchid)
      .then((resp) => {
        batchDataState["currentBatchData"] = resp.data[0];
        setBatchDataState(batchDataState);
      })
      .then(() => {
        getAllParticipants(batchid).then((resp) => {
          setBatchDataState({ ...batchDataState, partData: resp.data });
        });
      });
  };
  useEffect(() => {
    setBatchDetails(batchid)
  }, []);
  return (
    <Row>
      <Col>
        <Card>
          {batchDataState.partData.length != 0 && (
            <CardBody className="p-4">
              <Row justify-content>
                <Col lg="12">
                  <Participanttable ptData={batchDataState.partData} />
                </Col>
                <Col></Col>
              </Row>
            </CardBody>
          )}
        </Card>
      </Col>
    </Row>
  );
};
export default Batch;