import axios from "axios";
import Properties from "../../Properties";

const getAllPostAssessment = (id) => {
    return axios.get(Properties.SERVER_URL+'/postass?batchid='+id);
}
const addPostAssessment = (data) => {
    return axios.post(Properties.SERVER_URL+'/postass',data,{
        headers:{
            'Content-type':'application/json'
        }
    })
}
export {getAllPostAssessment,addPostAssessment};