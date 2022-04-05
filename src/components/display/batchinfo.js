import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {getDateInputFormat} from '../../services/commonFunctions';
export default (props) => {
    return <Container>
        <Row>
            <Col>
                <p><b>Batch Id:</b>{props.batchinfo.batchid}</p>
                <p><b>Batch Name: </b>{props.batchinfo.batchname}</p>
            </Col>
            <Col>
                <p><b>Start Date: </b>{getDateInputFormat(new Date(props.batchinfo.batchstartdate))}</p>
                <p><b>End Date:</b>{getDateInputFormat(new Date(props.batchinfo.batchenddate))}</p>
            </Col>
        </Row>
    </Container>
}