import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

class ProgressCircle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [props.progress],
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
                labels: [this.props.title],
                
            },
        };
    }
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{this.props.title}</CardTitle>
                    <ReactApexChart
                        options={{...this.state.options, colors:('color' in this.props)?[this.props.color]:['green']}}
                        series={[this.props.progress]}
                        type="radialBar"
                        height={350}
                    />
                </CardBody>
            </Card>
        );
    }
}

export default ProgressCircle;
