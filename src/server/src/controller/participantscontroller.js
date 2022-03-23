const participentdao = require('../dao/participentdao');

const insertParticipent = (req, resp) => {
    participentdao.insertParticipent(req.body).then(rec => {
        resp.send(rec);
    }).catch(err => {
        resp.send(err);
    });
};
const getAllParticipents = (req,resp) => {
    participentdao.getAllParticipents().then(result => {
        resp.send(result);
    }).catch(err => {
        resp.send(err);
    })
};
const getParticipentDetails = async (req,resp) => {
    participentdao.getParticipentByCondition({participentId: req.params.id})
    .then(result => {
        resp.send(result);
    }).catch(err => {
        resp.send(err);
    })
}
const deleteParticipent = async (req, resp) => {
    var ack = await participentdao.deleteParticipent(req.params.id);
    resp.send(ack);
};
const updateParticipent = async (req, resp) => {
    var ack = await participentdao.updateParticipent({participentId: req.params.id}, req.body);
    resp.send(ack);
}
module.exports.insertParticipent = insertParticipent;
module.exports.getAllParticipents = getAllParticipents;
module.exports.deleteParticipent = deleteParticipent;
module.exports.updateParticipent = updateParticipent;
module.exports.getParticipentDetails = getParticipentDetails;