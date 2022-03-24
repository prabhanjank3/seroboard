import React from "react";
import {Table} from 'react-bootstrap';
export default (props) => {
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Employee Designation</th>
            <th>Department</th>
            </tr>
        </thead>
        <tbody>
            {props.empData.map(emp => {
                return (
                    <tr>
                    <td>{emp.Emp_Id}</td>
                    <td>{emp.Emp_Name}</td>
                    <td>{emp.Emp_Designation}</td>
                    <td>{emp.Emp_Department}</td>
                    </tr>
                );
            })
            }
        </tbody>
        </Table>
    );
}