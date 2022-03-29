const pool = require('./configuration/postgresconfig').pool;
const Utils = require('../utils/utils');

// Returns attendance data withing specified date range
const getAttendanceData = (query, resp) => {
    const qry = `SELECT * FROM public."attendance" WHERE participantid IN (SELECT participantid from public."Participant" WHERE participantbatchid='${query.batchid}') AND date BETWEEN '${query.from} 00:00:00' AND '${query.to} 23:59:59' ORDER BY participantid, date`;
    pool.query(qry,[], (err, result) => {
        resp.send(result.rows);
    })
}
module.exports.getAttendanceData = getAttendanceData;