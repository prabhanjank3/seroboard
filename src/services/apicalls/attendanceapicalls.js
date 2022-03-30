import axios from "axios";
import Properties from "../../Properties";

const getAttendanceData = (query) => {
    console.log(Properties.SERVER_URL+'/attendance?from='+query.date+'&to='+query.date+'&batchid='+query.batchid);
    return axios.get(Properties.SERVER_URL+'/attendance?from='+query.date+'&to='+query.date+'&batchid='+query.batchid);
}
export {getAttendanceData};