const pool = require('./configuration/postgresconfig').pool;
const Utils = require('../utils/utils');

const insertAssignment = async (assignmentObj, resp) => {
    
    const {assignmentid, assignmentname, assignmentdate, batchid, maxscore, passingpercentage} = {...assignmentObj, assignmentid:'AS'+Math.floor(Math.random()*1000+1)};
    const qry = `INSERT INTO public."assignment" (assignmentid,assignmentname,assignmentdate,batchid, maxscore, passingpercentage) values('${assignmentid}','${assignmentname}', '${assignmentdate}', '${batchid}', ${maxscore}, ${passingpercentage} ) RETURNING assignmentid,assignmentname, assignmentdate, batchid`;
    await pool.query(qry, [], (err, result) => {
        console.log(err)
    resp.send((err)?err:result.rows);
    })
};
const getAllAssignment = async (batchid, resp) => {
    await pool.query(`SELECT * from public."assignment" WHERE batchid='${batchid}'`,[], (err, result) =>{
        resp.send((err)?err:result.rows);
    });
};

const deleteAssignment = (id, resp) => {
    pool.query(`DELETE FROM public."assignment" where assignmentid='${id}'`, [], (err,result) => {
    resp.send((err)?err:result.rows);
    })
};
const updateAssignment = (identifier, newValues, resp) => {
    const str = `UPDATE public."assignment" SET ${Utils.updateColumnsQuery(newValues)} WHERE ${Utils.conditionObjToQuery(identifier)} RETURNING assignmentid,assignmentname, assignmentdate, batchid`;
    pool.query(str, [], (err, result) => {
    resp.send((err)?err:result.rows);
    });
}
const topFivePerformers = (req, resp) => {
    const str = `SELECT scoretable.participantid, participantfirstname, participantlastname,assignmentscore FROM (SELECT participantid, FLOOR(sum(score)*100/sum(maxscore))as assignmentscore FROM assignment INNER JOIN assignmentrecord ON assignment.assignmentid = assignmentrecord.assignmentid WHERE batchid='${req.params.batchid}' group by assignmentrecord.participantid) as scoretable 
    INNER JOIN public."Participant" ON public."Participant".participantid = scoretable.participantid ORDER BY assignmentscore DESC LIMIT 5 `;
    pool.query(str, [], (err, result) => {
        resp.send((err)?err:result.rows);
        });
}
module.exports.insertAssignment = insertAssignment;
module.exports.getAllAssignment = getAllAssignment;
module.exports.deleteAssignment = deleteAssignment;
module.exports.updateAssignment = updateAssignment;
module.exports.topFivePerformers = topFivePerformers;