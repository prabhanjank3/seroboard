import React, { useEffect, useState } from "react";
import {Table, Button} from 'react-bootstrap';
import { connect } from "react-redux";
import {deleteBatch, getAllBatchs} from '../../services/apicalls/batchapicalls';
import './tables.css';
import EditBatchModal from '../modals/editBatchModal';
import AddParticipantsModal from '../modals/addParticipantsModal';
import {BsUiChecks} from 'react-icons/bs';
import {HiDocumentReport} from 'react-icons/hi';

const BatchTable =  (props) => {
    const [batchDataState, setBatchData] = useState({batchData:[]});
    const setData = () => {
        getAllBatchs().then(resp => {
            setBatchData({ batchData:resp.data});
        })
    }
    useEffect(() => {
        setData();
    },[]);
    const onDeleteClick = (id) => {
        deleteBatch(id).then(resp => {
            setData();
        })
    }
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Batch Name</th>
            <th>Instructor</th>
            {(props.role === 'ADMIN' || props.role === 'INSTRUCTOR') && <th>Actions</th>}
            </tr>
        </thead>
        <tbody>
            {batchDataState.batchData.map(batch => {
                return (
                    <tr>
                    <td>{batch.batchid}</td>
                    <td>{batch.batchname}</td>
                    <td>{batch.instructorname}</td>
                    {(props.role === 'ADMIN') && <td>
                        <EditBatchModal id={batch.batchid} action={setData}/>
                        <Button className="table-item-action-btn" onClick={() => {onDeleteClick(batch.batchid)}}>Delete</Button>
                    </td>}
                    {(props.role === 'COORDINATOR') && <td>
                    <AddParticipantsModal id={batch.batchid} action={setData}/>
                    <Button className="table-item-action-btn"><BsUiChecks/></Button>
                    <Button className="table-item-action-btn"><HiDocumentReport/></Button>
                    </td>
                    }
                    </tr>
                );
            })
            }
        </tbody>
        </Table>
    );
}
const mapStateToProps = (state) => {
    return {role:state.authData.role};
};
const mapDispatchToProps = (dispatch) => {
    return {
    setUserLoggedIn: (actionType,payLoad) => {
        dispatch({type: actionType, payLoad:payLoad});
    }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BatchTable);