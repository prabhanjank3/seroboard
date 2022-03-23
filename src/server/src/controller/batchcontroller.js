const Batchdao = require('../dao/batchdao');

const insertBatch = (req, resp) => {
    Batchdao.insertBatch(req.body).then(rec => {
        resp.send(rec);
    }).catch(err => {
        resp.send(err);
    });
};
const getBatchDetails = async (req,resp) => {
    Batchdao.getBatchByCondition({batchId: req.params.id})
    .then(result => {
        resp.send(result);
    }).catch(err => {
        resp.send(err);
    })
}
const getAllBatchs = (req,resp) => {
    Batchdao.getAllBatchs().then(result => {
        resp.send(result);
    }).catch(err => {
        resp.send(err);
    })
};
const deleteBatch = async (req, resp) => {
    var ack = await Batchdao.deleteBatch(req.params.id);
    resp.send(ack);
};
const updateBatch = async (req, resp) => {
    var ack = await Batchdao.updateBatch({batchId: req.params.id}, req.body);
    resp.send(ack);
}
module.exports.insertBatch = insertBatch;
module.exports.getAllBatchs = getAllBatchs;
module.exports.deleteBatch = deleteBatch;
module.exports.updateBatch = updateBatch;
module.exports.getBatchDetails = getBatchDetails;