
const partdao = require('../dao/participantdao');
const insertParticipant = (req, resp) => {
    console.log(req.body);
    partdao.insertParticipant(req.body,resp);
};
const getAllParticipants = (req,resp) => {
    partdao.getAllParticipants(resp);
};

const deleteParticipant = async (req, resp) => {
    partdao.deleteParticipant(req.params.id, resp);
};

module.exports.insertParticipant = insertParticipant;
module.exports.getAllParticipants = getAllParticipants;
module.exports.deleteParticipant = deleteParticipant;







