
const insertBatch = (BatchObj) => {
    var Batchrec = new Batch({...BatchObj, batchId: 'BT'+Math.floor(Math.random()*100+1)});
    return Batchrec.save();
};
const getAllBatchs = () => {
    return Batch.find();
};
const getBatchByCondition = (condition) => {
    return Batch.find(condition);
};
const deleteBatch = (id) => {
    return Batch.deleteOne({BatchId: id});
};
const updateBatch = (identifier, newValues) => {
    return Batch.updateOne(identifier, newValues);
}

module.exports.insertBatch = insertBatch;
module.exports.getAllBatchs = getAllBatchs;
module.exports.getBatchByCondition = getBatchByCondition;
module.exports.deleteBatch = deleteBatch;
module.exports.updateBatch = updateBatch;