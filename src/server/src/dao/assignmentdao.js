const pool = require('./configuration/postgresconfig').pool;
const Utils = require('../utils/utils');

const insertAssignment = async (assignmentObj, resp) => {
    
    const {assignmentid, assignmentname, assignmentdate, batchid} = {...assignmentObj, assignmentid:'AS'+Math.floor(Math.random()*1000+1)};
    const qry = `INSERT INTO public."assignment" (assignmentid,assignmentname,assignmentdate,batchid) values('${assignmentid}','${assignmentname}', '${assignmentdate}', '${batchid}' ) RETURNING assignmentid,assignmentname, assignmentdate, batchid`;
    await pool.query(qry, [], (err, result) => {
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
module.exports.insertAssignment = insertAssignment;
module.exports.getAllAssignment = getAllAssignment;
module.exports.deleteAssignment = deleteAssignment;
module.exports.updateAssignment = updateAssignment;