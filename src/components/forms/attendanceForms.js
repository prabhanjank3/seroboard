import React from "react";
import AttendanceTable from "../tables/AttendanceTable";
const AttendanceForm = (props) => {
    return (
        <AttendanceTable partData={props.partData} action={props.action} attReportData={props.attReportData} date={props.date}/>
    );
}
export default AttendanceForm;