import axios from "axios";
import Properties from "../../Properties";

const getAssignmentRecord = (id) => {
    return axios.get(Properties.SERVER_URL+'/assignmentrec?assignmentid='+id);
}
const markAssignmentScore = (report) => {
    return axios.post(Properties.SERVER_URL+'/assignmentrec',report,{
        headers:{
            'Content-type':'application/json'
        }
    })
}
export {getAssignmentRecord,markAssignmentScore};