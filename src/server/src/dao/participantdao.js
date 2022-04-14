const pool = require('./configuration/postgresconfig').pool;
const Utils = require('../utils/utils');
const insertParticipant = async (partObj, resp) => {
    const {participantid, participantfirstname, participantlastname, participantemail, participantskills, participantbatchid} = {...partObj, participantid:'PAR'+Math.floor(Math.random()*1000+1)};
    const qry = `INSERT INTO public."Participant" values('${participantid}','${participantfirstname}', '${participantlastname}', '${participantemail}', '${participantskills}' , '${participantbatchid}' ) RETURNING participantid,participantfirstname, participantlastname, participantemail,  participantskills`;
    console.log(qry)
    await pool.query(qry, [], (err, result) => {
    resp.send((err)?err:result.rows);
    })
};

const getAllParticipantswithoutid = async (query,resp) => {
    let qry = `SELECT participantid,participantfirstname,participantlastname, batchname FROM public."Batch" RIGHT OUTER JOIN public."Participant"
    ON public."Batch".batchid = public."Participant".participantbatchid`;
    await pool.query(qry,[], (err, result) =>{
        resp.send((err)?err:result.rows);
    });
};



const getAllParticipants = async (query,resp) => {
    await pool.query(`SELECT * from public."Participant" WHERE ${Utils.conditionObjToQuery(query)}`,[], (err, result) =>{
        resp.send((err)?err:result.rows);
    });
};
const getParticipantByCondition = (condition, resp) => {
    const whereQuery = Utils.conditionObjToQuery(condition);
    pool.query(`SELECT * FROM public."Participant" WHERE `+whereQuery, [], (err,result) => {
    resp.send((err)?err:result.rows);
    })
};
const deleteParticipant = (id, resp) => {
    pool.query(`DELETE FROM public."Participant" where participantId='${id}'`, [], (err,result) => {
    resp.send((err)?err:result.rows);
    })
};
const updateParticipant = (identifier, newValues, resp) => {
    const str = `UPDATE public."Participant" SET ${Utils.updateColumnsQuery(newValues)} WHERE ${Utils.conditionObjToQuery(identifier)} RETURNING participantid,participantfirstname, participantlastname, participantemail,  participantskills`;
    console.log(str)
    pool.query(str, [], (err, result) => {
    resp.send((err)?err:result.rows);
    });
}


module.exports.insertParticipant = insertParticipant;
module.exports.getAllParticipants = getAllParticipants;
module.exports.getParticipantByCondition = getParticipantByCondition;
module.exports.deleteParticipant = deleteParticipant;
module.exports.updateParticipant = updateParticipant;
module.exports.getAllParticipantswithoutid = getAllParticipantswithoutid;

