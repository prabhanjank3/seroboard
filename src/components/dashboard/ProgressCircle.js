import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

class ProgressCircle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [70],
            options: {
                chart: {
                    height: 350,
                    type: "radialBar",
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "70%",
                        },
                    },
                },
                labels: ["Batch Progress"],
            },
        };
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Batch Progress</CardTitle>
                    <CardSubtitle className="text-muted" tag="h6">
                        Monthly batch Progress
                    </CardSubtitle>

                    <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="radialBar"
                        height={350}
                    />
                </CardBody>
            </Card>
        );
    }
}

export default ProgressCircle;
