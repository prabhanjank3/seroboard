import axios from "axios";
import Properties from "../../Properties";

const getAllUsers = () => {
    return axios.get(Properties.SERVER_URL+'/user');
}
const getUserDetails = (id) => {
    return axios.get(Properties.SERVER_URL+'/user/'+id);
}
const insertNewUser = (userData) => {
    console.log(userData);
    return axios.post(Properties.SERVER_URL+'/user', userData, {
        headers: {
            'Content-type': 'application/json'
        }
    })
};

const insertNewUsers = (userData) => {
    return axios.post(Properties.SERVER_URL+'/users', userData, {
        headers: {
            'Content-type': 'application/json'
        }
    })
};

const updateUser = (id, data) => {
    return axios.patch(Properties.SERVER_URL+'/user/'+id, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}
const deleteUser = (id) => {
    return axios.delete(Properties.SERVER_URL+'/user/'+id);
} 

export {
    insertNewUser,
    insertNewUsers,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserDetails
};
