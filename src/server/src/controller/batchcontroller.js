const batchdao = require('../dao/batchdao');
const insertBatch = (req, resp) => {
    batchdao.insertBatch(req.body,resp);
};
const getAllBatchs = (req,resp) => {
    batchdao.getAllBatchs(resp);
};
const getBatchDetails = async (req,resp) => {
    batchdao.getBatchByCondition({batchid: req.params.id}, resp)
};
const deleteBatch = async (req, resp) => {
    batchdao.deleteBatch(req.params.id, resp);
};
const updateBatch = async (req, resp) => {
    batchdao.updateBatch({batchid: req.params.id}, req.body, resp);
}
module.exports.insertBatch = insertBatch;
module.exports.getAllBatchs = getAllBatchs;
module.exports.deleteBatch = deleteBatch;
module.exports.updateBatch = updateBatch;
module.exports.getBatchDetails = getBatchDetails;