import axios from "axios";
import Properties from "../../Properties";

const getAllParticipants = () => {
    return axios.get(Properties.SERVER_URL+'/participant');
}
const getParticipantDetails = (id) => {
    return axios.get(Properties.SERVER_URL+'/participant/'+id);
}
const getParticipantInDuration = (duration) => {
    return axios.get(Properties.SERVER_URL+'/participantduration?from='+duration.from+'&to='+duration.to);
}
const insertNewParticipant = (ParticipantData) => {
    return axios.post(Properties.SERVER_URL+'/participant', ParticipantData, {
        headers: {
            'Content-type': 'application/json'
        }
    })
};
const updateParticipant = (id, data) => {
    return axios.patch(Properties.SERVER_URL+'/participant/'+id, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}
const deleteParticipant = (id) => {
    return axios.delete(Properties.SERVER_URL+'/participant/'+id);
} 
export {
    insertNewParticipant,
    updateParticipant,
    deleteParticipant,
    getAllParticipants,
    getParticipantDetails,
    getParticipantInDuration
};
