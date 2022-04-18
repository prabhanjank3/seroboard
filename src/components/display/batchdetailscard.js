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
                  <p>FAST: PYTHON TRAINING</p>
                </div>
                <div>
                  <h6>START DATE</h6>
                  <p>21-02-2022</p>
                </div>
                <div>
                  <h6>END DATE</h6>
                  <p>25-05-2022</p>
                </div>
                <div>
                  <h6>COORDINATOR</h6>
                  <p>OMKAR SUTAR</p>
                </div>
                <div>
                  <h6>INSTRUCTOR</h6>
                  <p>MAHESH JAWALKAR</p>
                </div>
              </div>
                    </CardBody>
                </Card>
            </div>
    )    
}
