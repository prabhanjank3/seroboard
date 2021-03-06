import axios from "axios";
import Properties from "../../Properties";

const getAttendanceData = (query) => {
    return axios.get(Properties.SERVER_URL+'/attendance?from='+query.date+'&to='+query.date+'&batchid='+query.batchid);
}
const submitAttendanceReport = (report,batchid) => {
    return axios.post(Properties.SERVER_URL+'/attendance/'+batchid,report,{
        headers:{
            'Content-type':'application/json'
        }
    })
}
export {getAttendanceData,submitAttendanceReport};