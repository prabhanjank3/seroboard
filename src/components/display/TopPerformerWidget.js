import React from "react";
import Topperformertable from "../tables/topperformertable";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

class PieChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="chart">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Top Performers</CardTitle>
                        <CardSubtitle className="text-muted mb-5" tag="h6">
                            Top Performers
                        </CardSubtitle>
                        <Topperformertable batchid={this.props.batchid} />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(PieChart), domContainer);

export default PieChart;
