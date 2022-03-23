import React from "react";
import {connect} from 'react-redux';
import {insertNewBatch} from '../../services/apicalls/batchapicalls';
import {useNavigate} from 'react-router-dom';
import {Alert} from 'react-bootstrap';
import NewBatchForms from "../../container/forms/insertBatch";

const insertAction = (data) => {
     insertNewBatch(data).then(resp => {
        alert(`Batch ${resp.data.batchId} created`);
     }).catch(err => {
         alert('Something went wrong!');
     });
}
const NewBatchRegistration = (props) => {
    const navigate = useNavigate();
    return (<div>
        <NewBatchForms action={(data) => {insertAction(data);navigate('/')}} />
    </div>);
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
    setUserLoggedIn: (actionType,payLoad) => {
        dispatch({type: actionType, payLoad:payLoad});
    }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewBatchRegistration);