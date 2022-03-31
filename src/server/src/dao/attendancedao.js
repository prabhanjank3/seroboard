const pool = require('./configuration/postgresconfig').pool;
const Utils = require('../utils/utils');

// Returns attendance data withing specified date range
const getAttendanceData = (query, resp) => {
    const qry = `SELECT * FROM public."attendance" WHERE ispresent='true' AND participantid IN (SELECT participantid from public."Participant" WHERE participantbatchid='${query.batchid}') AND date BETWEEN '${query.from} 00:00:00' AND '${query.to} 23:59:59' ORDER BY participantid, date`;
    pool.query(qry,[], (err, result) => {
        resp.send(result.rows);
    })
}
const markAttendance = (data, resp) => {
    pool.query('DELETE FROM public."attendance"',[],(err, result) => {
        const qry = `INSERT INTO public."attendance" (attid,participantid,ispresent,date) VALUES ${Utils.insertMultipleRows(data)}`;
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
module.exports.getAttendanceData = getAttendanceData;
module.exports.markAttendance = markAttendance;
module.exports.deleteAttReportByCondition = deleteAttReportByCondition;