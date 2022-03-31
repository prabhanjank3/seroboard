import axios from "axios";
import Properties from "../../Properties";

const getPostAssessmentRecord = (id) => {
    return axios.get(Properties.SERVER_URL+'/postassrec?postassid='+id);
}
const markPostAssessmentScore = (report) => {
    return axios.post(Properties.SERVER_URL+'/postassrec',report,{
        headers:{
            'Content-type':'application/json'
        }
    })
}
export {getPostAssessmentRecord,markPostAssessmentScore};