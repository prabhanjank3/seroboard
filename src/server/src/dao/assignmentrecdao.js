const pool = require('./configuration/postgresconfig').pool;
const Utils = require('../utils/utils');

// Returns attendance data withing specified date range
const getAssignmentRecord = (query, resp) => {
    const qry = `SELECT * FROM public."assignmentrecord" WHERE assignmentid='${query.assignmentid}'`;
    pool.query(qry,[], (err, result) => {
        resp.send(result.rows);
    })
}
const markAssignmentScore = (data, resp) => {
    pool.query(`DELETE FROM public."assignmentrecord" WHERE assignmentid='${data[Object.keys(data)[0]]['postassid']}'`,[],(err,result) => {
        const qry = `INSERT INTO public."assignmentrecord" (assignmentrecid,participantid,score,assignmentid) VALUES ${Utils.insertMultipleRows(data)}`;
        pool.query(qry,[], (err, result) => {
        resp.send({status:'Success', code:200});
    })
    })
    
}
module.exports.getAssignmentRecord = getAssignmentRecord;
module.exports.markAssignmentScore = markAssignmentScore;
