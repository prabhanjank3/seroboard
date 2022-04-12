import axios from 'axios';
import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { Card,CardBody } from 'reactstrap';
import { getBatchDetails } from '../../services/apicalls/batchapicalls';
import ProgressCircle from '../dashboard/ProgressCircle';
import BatchDropdownInput from '../utils/BatchDropdownInput';
export default (props) => {
    let [visualstate, setvisualstate] = useState({progress:0})
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    function dateDiffInDays(a, b) {
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
      }
    const setBatch = (batchid) =>
    {
        getBatchDetails(batchid).then(resp => {
            let st = new Date(resp.data[0]['batchstartdate']);
            let en = new Date(resp.data[0]['batchenddate'])
            let temp = Math.floor(dateDiffInDays(st,new Date())*100/dateDiffInDays(st,en));
            console.log(temp)
            setvisualstate({
                ...visualstate,
                progress:temp
            })
        })
    }
    return (<Card>
        <CardBody>
    <Container>
        <Row>
            <BatchDropdownInput onChange={(e) => setBatch(e.target.value)} />
        </Row>
        <br></br>
        <Row>
            <Col><ProgressCircle progress={visualstate.progress}/></Col>
            <Col></Col>
        </Row>
    </Container>
    </CardBody>
    </Card>);
}