
const partdao = require('../dao/participantdao');
const insertParticipant = (req, resp) => {
    partdao.insertParticipant(req.body,resp);
};
const getAllParticipants = (req,resp) => {
    partdao.getAllParticipants(req.query,resp);
};
const getParticipantDetails = async (req,resp) => {
    partdao.getParticipantByCondition({participantid: req.params.id}, resp)
};
const deleteParticipant = async (req, resp) => {
    partdao.deleteParticipant(req.params.id, resp);
};
const updateParticipant = async (req, resp) => {
    partdao.updateParticipant({participantid: req.params.id}, req.body, resp);
}

module.exports.insertParticipant = insertParticipant;
module.exports.getAllParticipants = getAllParticipants;
module.exports.getParticipantDetails = getParticipantDetails;
module.exports.deleteParticipant = deleteParticipant;
module.exports.updateParticipant = updateParticipant;








