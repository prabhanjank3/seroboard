import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

class PieChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [44, 55, 41, 17, 15],
            options: {
                chart: {
                    type: "donut",
                    dataLabels: {
                        position: "top",
                    },
                },

                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Batches Overall Performance</CardTitle>
                        <CardSubtitle className="text-muted mb-5" tag="h6">
                            Monthly Performance Report
                        </CardSubtitle>
                        <ReactApexChart
                            options={this.state.options}
                            series={this.state.series}
                            type="donut"
                        />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(PieChart), domContainer);

export default PieChart;
