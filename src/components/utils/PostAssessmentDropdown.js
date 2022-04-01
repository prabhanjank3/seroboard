import React from "react";
import {Form} from 'react-bootstrap';

export default (props) => {
    return (
    <Form.Select aria-label="Default select example" onChange={props.onChange} value={props.value}>
        <option>{props.title}</option>
        {props.options.map((option) => {
            return <option value={option.postassid}>{option.postassname}</option>;
        })}
    </Form.Select>
    );
}