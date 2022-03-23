const pool = require('./configuration/postgresconfig').pool;
const Utils = require('../utils/utils');

const insertBatch = async (batchObj, resp) => {
    const {batchid, batchname, batchstartdate, batchenddate, instructorname} = {...batchObj, batchid:'BT'+Math.floor(Math.random()*1000+1)};
    const qry = `INSERT INTO public."Batch" values('${batchid}','${batchname}', '${batchstartdate}', '${batchenddate}', '${instructorname}' ) RETURNING batchid,batchname, batchstartdate, batchenddate, instructorname`;
    await pool.query(qry, [], (err, result) => {
    resp.send((err)?err:result.rows);
    })
};
const getAllBatchs = async (resp) => {
    await pool.query(`SELECT * from public."Batch"`,[], (err, result) =>{
        resp.send((err)?err:result.rows);
    });
};
const getBatchByCondition = (condition, resp) => {
    const whereQuery = Utils.conditionObjToQuery(condition);
    pool.query(`SELECT * FROM public."Batch" WHERE `+whereQuery, [], (err,result) => {
    resp.send((err)?err:result.rows);
    })
};
const deleteBatch = (id, resp) => {
    pool.query(`DELETE FROM public."Batch" where batchid='${id}'`, [], (err,result) => {
    resp.send((err)?err:result.rows);
    })
};
const updateBatch = (identifier, newValues, resp) => {
    const str = `UPDATE public."Batch" SET ${Utils.updateColumnsQuery(newValues)} WHERE ${Utils.conditionObjToQuery(identifier)} RETURNING batchid,batchname, batchstartdate, batchenddate, instructorname`;
    pool.query(str, [], (err, result) => {
    resp.send((err)?err:result.rows);
    });
}
module.exports.insertBatch = insertBatch;
module.exports.getAllBatchs = getAllBatchs;
module.exports.getBatchByCondition = getBatchByCondition;
module.exports.deleteBatch = deleteBatch;
module.exports.updateBatch = updateBatch;