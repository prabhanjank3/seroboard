import React from "react";
import {
  VictoryPie,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory";

// function DoughnutChart() {
//     return (
//         <div>
//            <VictoryPie
//   data={[
//     { x: "Total Students", y: 35 },
//     { x: "Present Students", y: 40 },
//     { x: "Absent Students", y: 55 }
//   ]}
// />
//         </div>
//     )
// }
// export default DoughnutChart

function DoughnutChart() {
    const sample_data =
    [
      {
        "attendanceId": "72ed9817-a2e0-45a9-8804-3a4e00090329",
        "date": "2022-03-20",
        "status": "Present",
        "participantPid": "72fdea9b-4664-4eba-8879-adccec2a10f7",
        "batchBatchid": "0f0c2b0a-28ef-4bf5-8628-dddc7f1d1dc9",
        "createdAt": "2022-03-28T11:46:59.000Z",
        "updatedAt": "2022-03-28T11:46:59.000Z"
      },
      {
        "attendanceId": "901c1101-2ec7-495d-987e-921831c47061",
        "date": "2022-03-28",
        "status": "Present",
        "participantPid": "44c01f9f-4d91-4635-a88a-9bc705366abd",
        "batchBatchid": "0f0c2b0a-28ef-4bf5-8628-dddc7f1d1dc9",
        "createdAt": "2022-03-28T11:46:59.000Z",
        "updatedAt": "2022-03-28T11:46:59.000Z"
      },
      {
        "attendanceId": "99f4683e-e77c-403f-a333-6110c4c7da70",
        "date": "2022-03-27",
        "status": "Absent",
        "participantPid": "72fdea9b-4664-4eba-8879-adccec2a10f7",
        "batchBatchid": "0f0c2b0a-28ef-4bf5-8628-dddc7f1d1dc9",
        "createdAt": "2022-03-28T11:47:42.000Z",
        "updatedAt": "2022-03-28T11:47:42.000Z"
      }
    ]
    let abs = 0;
    let pres = 0;
    {
      sample_data.map(item => {
        if (item.status == "Absent") {
          abs = abs + 1;
        }
        else if (item.status == "Present") {
          pres = pres + 1;
        }
      })
    }
  const present = (pres / sample_data.length) * 100
  const absent = (abs / sample_data.length) * 100
  return (
    <div>
      <div class="card-group ml-2">
        <div class="card column-count-3 shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <h5 class="card-title">Last 30 days Attendance</h5>
            <VictoryPie
              //  padAngle={({ datum }) => datum.y}
              //   innerRadius={50}
              colorScale={["Green", "Red"]}
              data={[
                { x: "Present", y: present, label: `Present \n ${present} %` },
                { x: "Absent", y: absent, label: `Absent \n ${absent} %` },
              ]}
            />
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
