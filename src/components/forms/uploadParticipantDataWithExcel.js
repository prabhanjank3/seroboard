import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ExcelFileInput from '../utils/excelfileinput';
import {convertArrayToPgArray} from '../../services/commonFunctions'
import axios from 'axios';
import properties from '../../Properties';
export default (props) => {
  const stringToPgArray = (str) => {
    var starr = str.split(",");
    return convertArrayToPgArray(starr);
  };
    const onExcelUpload = (data) => {
        data.forEach(rec => {
          rec['participantskills'] = stringToPgArray(rec.participantskills)
        })
        axios.post(properties.SERVER_URL+'/bulkparticipantinsert', data, {
          headers:{
            "Content-type":"application/json"
          }
        }).then(resp => {
          if(resp.data.code === 200)
          {
            alert('Inserted Successfully!')
          }
        })
      }
    return <Container>
        <Row>
            <Col>
                <label htmlFor="exampleFormControlInput1" className="form-label">
                Import from excel file
                </label>
                <ExcelFileInput action={(data) => onExcelUpload(data)} />
            </Col>
        </Row>
    </Container>
}