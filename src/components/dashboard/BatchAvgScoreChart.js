import {useState} from 'react';
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import { useEffect } from "react";
import axios from 'axios';
import Properties from '../../Properties';
import properties from '../../Properties';
import { connect } from 'react-redux';
const SalesChart = (props) => {
  useEffect(() => {
    let qry = '/avgscoreall';
    // if(props.role === 'COORDINATOR')
    // {
    //   qry = '/batchparticipantoverview?coordinatorname='+props.userFirstName
    // }
    // if(props.role === 'INSTRUCTOR')
    // {
    //   qry = '/batchparticipantoverview?instructorname='+props.userFirstName
    // }
    axios.get(properties.SERVER_URL+qry).then(resp => {
      let catagories = resp.data.map(obj => obj.batchname);
      let data = resp.data.map(obj => obj.avgscore);
      setChartState({catagories:catagories,data:data});
    })
  }, [])
  const [chartState, setChartState] = useState({catagories: [
   
  ],data:[]})
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
      categories:chartState.catagories,
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
      data:chartState.data ,
    },
  ];

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Batch Performence Overview</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Avarage Score
        </CardSubtitle>
        <Chart options={options} series={series} type="bar" height="379" />
      </CardBody>
    </Card>
  );
};
const mapStateToProps = (state) => {
  return { role: state.authData.role , userFirstName:state.authData.userFirstName};
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedIn: (actionType, payLoad) => {
      dispatch({ type: actionType, payLoad: payLoad });
    },
  };
};
export default connect(mapStateToProps)(SalesChart);
