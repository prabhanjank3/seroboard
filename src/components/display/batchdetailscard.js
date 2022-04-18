import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle} from "reactstrap";

export default (props) => {
    return (
        <div id="chart">
                <Card>
                    <CardBody>
                        {/* <CardTitle tag="h5">Top Performers</CardTitle>
                        <CardSubtitle className="text-muted mb-5" tag="h6">
                            Top Performers
                        </CardSubtitle> */}
                        <div className="d-flex flex-column">
                <div>
                  <h6>Batch Name</h6>
                  <p>{props.batchdetails.batchname}</p>
                </div>
                <div>
                  <h6>START DATE</h6>
                  <p>{new Date(props.batchdetails.batchstartdate).getFullYear()+'-'+new Date(props.batchdetails.batchstartdate).getMonth()+'-'+new Date(props.batchdetails.batchstartdate).getDate()}</p>
                </div>
                <div>
                  <h6>END DATE</h6>
                  <p>{new Date(props.batchdetails.batchenddate).getFullYear()+'-'+new Date(props.batchdetails.batchenddate).getMonth()+'-'+new Date(props.batchdetails.batchenddate).getDate()}</p>
                </div>
                <div>
                  <h6>COORDINATOR</h6>
                  <p>{props.batchdetails.coordinatorname}</p>
                </div>
                <div>
                  <h6>INSTRUCTOR</h6>
                  <p>{props.batchdetails.instructorname}</p>
                </div>
              </div>
                    </CardBody>
                </Card>
            </div>
    )    
}
