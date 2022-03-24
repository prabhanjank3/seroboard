const pool = require('./configuration/postgresconfig').pool;

const insertParticipant = async (partObj, resp) => {
    const {participantid, participantfirstname, participantlastname, participantemail, participantskills, participantbatchid} = {...partObj, participantid:'PAR'+Math.floor(Math.random()*1000+1)};
    const qry = `INSERT INTO public."Participant" values('${participantid}','${participantfirstname}', '${participantlastname}', '${participantemail}', '${participantskills}' , '${participantbatchid}' ) RETURNING participantid,participantfirstname, participantlastname, participantemail,  participantskills`;
    console.log(qry)
    await pool.query(qry, [], (err, result) => {
    resp.send((err)?err:result.rows);
    })
};

const getAllParticipants = async (resp) => {
    await pool.query(`SELECT * from public."Participant"`,[], (err, result) =>{
        resp.send((err)?err:result.rows);
    });
};

const deleteParticipant = (id, resp) => {
    pool.query(`DELETE FROM public."Participant" where participantId='${id}'`, [], (err,result) => {
    resp.send((err)?err:result.rows);
    })
};


module.exports.insertParticipant = insertParticipant;
module.exports.getAllParticipants = getAllParticipants;
module.exports.deleteParticipant = deleteParticipant;
