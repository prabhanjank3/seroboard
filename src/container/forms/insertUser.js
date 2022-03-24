import React from "react";
import NewUserForm from "../../container/forms/insertUser";
import {connect} from 'react-redux';
import {insertNewUser} from '../../services/apicalls/apicall';
import {useNavigate} from 'react-router-dom';
import {Alert} from 'react-bootstrap';

const insertAction = (data) => {
     return insertNewUser(data).then(resp => {
        alert(`User ${resp.data.userid} created`);
     }).catch(err => {
         alert('Something went wrong!');
     });
}
const NewUserRegistration = (props) => {
    const navigate = useNavigate();
    return (<div>
        <NewUserForm action={(data) => {insertAction(data).then(() => navigate('/'))}} />
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
export default connect(mapStateToProps,mapDispatchToProps)(NewUserRegistration);