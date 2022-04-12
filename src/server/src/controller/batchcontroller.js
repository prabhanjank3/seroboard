const batchdao = require('../dao/batchdao');
const insertBatch = (req, resp) => {
    batchdao.insertBatch(req.body,resp);
};
const getAllBatchs = (req,resp) => {
    batchdao.getAllBatchs(req,resp);
};
const getAllBatchsByInstructor = (req,resp) => {
    batchdao.getAllBatchsByInstructor(req.params.name,resp);
};
const getBatchDetails = async (req,resp) => {
    batchdao.getBatchByCondition({batchid: req.params.id}, resp)
};
const getBatchInDuration = async (req, resp) => {
    batchdao.getBatchInDuration(req.query, resp);
}
const deleteBatch = async (req, resp) => {
    batchdao.deleteBatch(req.params.id, resp);
};
const updateBatch = async (req, resp) => {
    batchdao.updateBatch({batchid: req.params.id}, req.body, resp);
}
module.exports.insertBatch = insertBatch;
module.exports.getAllBatchs = getAllBatchs;
module.exports.getAllBatchsByInstructor = getAllBatchsByInstructor;
module.exports.deleteBatch = deleteBatch;
module.exports.updateBatch = updateBatch;
module.exports.getBatchDetails = getBatchDetails;
module.exports.getBatchInDuration = getBatchInDuration;