import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import { useEffect } from "react";

const SalesChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 2,
      },
    },
    colors: ["#0d6efd", "#009efb", "#6771dc"],
    xaxis: {
      categories: [
        "Batch 1",
        "Batch 2",
        "Batch 3",
        "Batch 4",
        "Batch 5",
        "Batch 6",
        "Batch 7",
        "Batch 8",
      ],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "React",
      data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
    },
  ];

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Attendance Overview</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Monthly Attendance Report
        </CardSubtitle>
        <Chart options={options} series={series} type="bar" height="379" />
      </CardBody>
    </Card>
  );
};

export default SalesChart;
