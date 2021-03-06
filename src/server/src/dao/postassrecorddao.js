const pool = require('./configuration/postgresconfig').pool;
const Utils = require('../utils/utils');

// Returns attendance data withing specified date range
const getPostAssessmentRecord = (query, resp) => {
    const qry = `SELECT * FROM public."postassessmentrecord" WHERE postassid='${query.postassid}'`;
    pool.query(qry,[], (err, result) => {
        resp.send(result.rows);
    })
}
const markPostAssessmentScore = (data, resp) => {
    pool.query(`DELETE FROM public."postassessmentrecord" WHERE postassid='${data[Object.keys(data)[0]]['postassid']}'`,[],(err,result) => {
        const qry = `INSERT INTO public."postassessmentrecord" (postassrecid,participantid,score,postassid) VALUES ${Utils.insertMultipleRows(data)}`;
        pool.query(qry,[], (err, result) => {
        resp.send({status:'Success', code:200});
    })
    })
    
}
const deleteAttReportByCondition = (condition, resp) => {
    const whereQuery = Utils.conditionObjToQuery(condition);
    pool.query(`DELETE FROM public."attendance" WHERE `+whereQuery, [], (err,result) => {
    resp.send((err)?err:result.rows);
    })
};
const getBatchAvgScore = (req, resp) => {
    const qry = `SELECT FLOOR(SUM(score)/SUM(maxscore)*100) as avgscore FROM public."postassessment" INNER JOIN public."postassessmentrecord" ON
    public."postassessment".postassid = public."postassessmentrecord".postassid WHERE batchid='${req.params.batchid}' GROUP BY batchid`;
    pool.query(qry,[], (err, result) => {
        resp.send((err)?err:result.rows);
    })
}
const getAvgScoreForAllBatches = (req, resp) => {
    const qry = `SELECT batchscore.batchid, batchname, avgscore FROM (SELECT batchid, FLOOR(SUM(score)/SUM(maxscore)*100) as avgscore FROM public."postassessment" INNER JOIN public."postassessmentrecord" ON
    public."postassessment".postassid = public."postassessmentrecord".postassid  GROUP BY batchid) as batchscore INNER JOIN public."Batch" ON batchscore.batchid=public."Batch".batchid`
    pool.query(qry,[], (err, result) => {
        resp.send((err)?err:result.rows);
    })
}
module.exports.getPostAssessmentRecord = getPostAssessmentRecord;
module.exports.markPostAssessmentScore = markPostAssessmentScore;
module.exports.getBatchAvgScore = getBatchAvgScore;
module.exports.getAvgScoreForAllBatches = getAvgScoreForAllBatches;
