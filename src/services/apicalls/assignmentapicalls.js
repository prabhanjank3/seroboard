import axios from "axios";
import Properties from "../../Properties";

const getAllAssignment = (id) => {
    return axios.get(Properties.SERVER_URL+'/assignment?batchid='+id);
}
const addAssignment = (data) => {
    return axios.post(Properties.SERVER_URL+'/postass',data,{
        headers:{
            'Content-type':'application/json'
        }
    })
}
export {getAllAssignment,addAssignment};