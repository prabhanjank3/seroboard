import React, { useEffect, useState } from "react";
import {Table, Button} from 'react-bootstrap';
import { connect } from "react-redux";
import {deleteBatch, getAllBatchs, getBatchInDuration} from '../../services/apicalls/batchapicalls';
import './tables.css';
import EditBatchModal from '../modals/editBatchModal';
import AddParticipantsModal from '../modals/addParticipantsModal';
import {BsUiChecks} from 'react-icons/bs';
import {HiDocumentReport} from 'react-icons/hi';
import BatchDurationForm from "../forms/batchDuration";
const BatchTable =  (props) => {
    const [batchDataState, setBatchData] = useState({batchData:[]});
    const initialDuration = {from:'2022-01-01', to:'2023-01-01'};
    const setData = (duration) => {
        getBatchInDuration({from:duration.from, to:duration.to}).then(resp => {
            setBatchData({ batchData:resp.data});
        })
    }
    const setDuration = (newDuration) => {
        setData(newDuration);
    }
    useEffect(() => {
        setData(initialDuration);
    },[]);
    const onDeleteClick = (id) => {
        deleteBatch(id).then(resp => {
            setData();
        })
    }
    return (
        <div>
        <BatchDurationForm from={initialDuration.from} to={initialDuration.to} action={(newDuration) => {setDuration(newDuration)}}/>
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
        </div>
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