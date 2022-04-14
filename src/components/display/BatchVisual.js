import axios from 'axios';
import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { Card,CardBody } from 'reactstrap';
import properties from '../../Properties';
import { getBatchDetails } from '../../services/apicalls/batchapicalls';
import ProgressCircle from '../dashboard/ProgressCircle';
import BatchDropdownInput from '../utils/BatchDropdownInput';
import TopPerformerWidget from './TopPerformerWidget';
import BatchAvgScoreChart from '../dashboard/BatchAvgScoreChart';
export default (props) => {
    let [visualstate, setvisualstate] = useState({progress:0, avgscore:0, batchid:''})
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    function dateDiffInDays(a, b) {
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
      }
    const setBatch = (batchid) =>
    {
        Promise.all([getBatchDetails(batchid),axios.get(properties.SERVER_URL+'/batchavgscore/'+batchid)]).then(resp => {
            console.log(resp)
            let st = new Date(resp[0].data[0]['batchstartdate']);
            let en = new Date(resp[0].data[0]['batchenddate'])
            let temp = Math.floor(dateDiffInDays(st,new Date())*100/dateDiffInDays(st,en));
            setvisualstate({
                ...visualstate,
                progress:temp,
                batchid:batchid,
                avgscore:(resp[1].data.length>0)?resp[1].data[0]['avgscore']:0
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
            <Col lg={6}><ProgressCircle title={'Batch Progress'} progress={visualstate.progress} color={'#008FFB'}/></Col>
            <Col lg={6}><ProgressCircle title={'Avarage Score'} progress={visualstate.avgscore} color={'#00E396'}/></Col>
        </Row>
        <Row>
            <Col lg={6}><TopPerformerWidget batchid={visualstate.batchid}/></Col>
        </Row>
    </Container>
    </CardBody>
    </Card>);
}