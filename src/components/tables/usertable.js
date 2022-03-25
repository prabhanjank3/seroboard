import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { getAllUsers, deleteUser } from "../../services/apicalls/apicall";
import { connect } from "react-redux";
import "./tables.css";
import EditUserModal from "../modals/editUserModal";
import SearchUserForm from "../forms/serchUserForm";
const NewUserTable = (props) => {
  const [userDataState, setUserData] = useState({ userData: [] });
  const setData = () => {
    getAllUsers().then((resp) => {
      console.log(resp);
      setUserData({ userData: resp.data });
    });
  };
  useEffect(() => {
    setData();
  }, []);
  const onDeleteClick = (id) => {
    deleteUser(id).then((resp) => {
      setData();
    });
  };
  const onEdit = () => {
    setData();
  };
  return (
    <div>
      <SearchUserForm />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            {props.role === "ADMIN" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {userDataState.userData.map((user) => {
            return (
              <tr key={user.userid}>
                <td>{user.userid}</td>
                <td>{user.userfirstname}</td>
                <td>{user.userlastname}</td>
                <td>{user.userrole}</td>
                {props.role === "ADMIN" && (
                  <td>
                    <EditUserModal id={user.userid} action={onEdit} />
                    <Button
                      className="table-item-action-btn"
                      onClick={() => {
                        onDeleteClick(user.userid);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { role: state.authData.role };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedIn: (actionType, payLoad) => {
      dispatch({ type: actionType, payLoad: payLoad });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserTable);
