import React from "react";
import Usertable from "../../components/tables/usertable";
import Batchtable from "../../components/tables/batchtable";
import {Container, Row, Col} from 'react-bootstrap';
import NavComponent from "../Navbar";
import AddUserModal from '../../components/modals/addUserModal';
export default () => {
    return (<div>
    <NavComponent/>
    <Container>
        <Row>
            <Col>
            <Usertable />
            </Col>
            <Col>
            <Batchtable />
            </Col>
        </Row>
    </Container>
    </div>);
}