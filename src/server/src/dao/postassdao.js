const pool = require('./configuration/postgresconfig').pool;
const Utils = require('../utils/utils');

const insertPostass = async (postassObj, resp) => {
    const {postassid, postassname, postassdate, batchid,maxscore,passingpercentage} = {...postassObj, postassid:'PA'+Math.floor(Math.random()*1000+1)};
    const qry = `INSERT INTO public."postassessment" (postassid,postassname,postassdate,batchid,maxscore,passingpercentage) values('${postassid}','${postassname}', '${postassdate}', '${batchid}', ${maxscore}, ${passingpercentage} ) RETURNING postassid,postassname, postassdate, batchid`;
    await pool.query(qry, [], (err, result) => {
    resp.send((err)?err:result.rows);
    })
};
const getAllPostass = async (batchid, resp) => {
    await pool.query(`SELECT * from public."postassessment" WHERE batchid='${batchid}'`,[], (err, result) =>{
        resp.send((err)?err:result.rows);
    });
};

const deletePostass = (id, resp) => {
    pool.query(`DELETE FROM public."postassessment" where postassid='${id}'`, [], (err,result) => {
    resp.send((err)?err:result.rows);
    })
};
const updatePostass = (identifier, newValues, resp) => {
    const str = `UPDATE public."postassessment" SET ${Utils.updateColumnsQuery(newValues)} WHERE ${Utils.conditionObjToQuery(identifier)} RETURNING postassid,postassname, postassdate, batchid`;
    pool.query(str, [], (err, result) => {
    resp.send((err)?err:result.rows);
    });
}
module.exports.insertPostass = insertPostass;
module.exports.getAllPostass = getAllPostass;
module.exports.deletePostass = deletePostass;
module.exports.updatePostass = updatePostass;