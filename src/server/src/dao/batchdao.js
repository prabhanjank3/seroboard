const pool = require('./configuration/postgresconfig').pool;
const { default: axios } = require('axios');
const Utils = require('../utils/utils');

const insertBatch = async (batchObj, resp) => {
    const {batchid, batchname, batchstartdate, batchenddate, instructorname, coordinatorname} = {...batchObj, batchid:'BT'+Math.floor(Math.random()*1000+1)};
    const qry = `INSERT INTO public."Batch" values('${batchid}','${batchname}', '${batchstartdate}', '${batchenddate}', '${instructorname}' ,'${coordinatorname}' ) RETURNING batchid,batchname, batchstartdate, batchenddate, instructorname`;
    await pool.query(qry, [], (err, result) => {
    resp.send((err)?err:result.rows);
    })
};
const getAllBatchs = async (req,resp) => {
    let qry = `SELECT * from public."Batch"`;
    if(req.query.instructorname !== undefined)
    {
        qry = `SELECT batchid, batchname from public."Batch" WHERE instructorname = '${req.query.instructorname}'`
    }
    if(req.query.coordinatorname !== undefined)
    {
        qry = `SELECT batchid, batchname from public."Batch" WHERE coordinatorname = '${req.query.coordinatorname}'`
    }
    await pool.query(qry,[], (err, result) =>{
        resp.send((err)?err:result.rows);
    });
};
const getAllBatchsByInstructor = async (name, resp) => {
    await pool.query(`SELECT * from public."Batch" WHERE instructorname = '${name}'`,[], (err, result) =>{
        resp.send((err)?err:result.rows);
    });
};
const getBatchByCondition = (condition, resp) => {
    const whereQuery = Utils.conditionObjToQuery(condition);
    pool.query(`SELECT * FROM public."Batch" WHERE `+whereQuery, [], (err,result) => {
    resp.send((err)?err:result.rows);
    })
};
const getBatchInDuration = (condition, resp) => {
    let qry = '';
    if(condition.instructorname !== undefined)
    {
        qry = `SELECT * FROM public."Batch" WHERE instructorname='${condition.instructorname}' AND batchstartdate <= '${condition.to}' AND batchenddate >= '${condition.from}'`;
    }
    else if(condition.coordinatorname !== undefined)
    {
        qry = `SELECT * FROM public."Batch" WHERE coordinatorname='${condition.coordinatorname}' AND batchstartdate <= '${condition.to}' AND batchenddate >= '${condition.from}'`;
    }
    else
    {
        qry = `SELECT * FROM public."Batch" WHERE batchstartdate <= '${condition.to}' AND batchenddate >= '${condition.from}'`;
    }
    pool.query(qry, [], (err, result) => {
        resp.send(result.rows);
    })
}
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

const getBatchParticipantOverview = (req, resp) => {
    let filter = ''
    if(req.query.instructorname !==undefined)
    {
        filter = `WHERE public."Batch".instructorname='${req.query.instructorname}'`
    }
    else if(req.query.coordinatorname !==undefined)
    {
        filter = `WHERE public."Batch".coordinatorname='${req.query.coordinatorname}'`
    }
    let qry = `SELECT batchname, count(participantid) FROM public."Batch" INNER JOIN public."Participant" 
    ON public."Batch".batchid = public."Participant".participantbatchid ${filter} GROUP BY batchname`;
    pool.query(qry, [], (err,result) => {
        resp.send((err)?err:result.rows);
    })
}
const getBatchCount = (req, resp) => {
    
    const qry = `SELECT count(batchid) FROM public."Batch"`;
    const activeBatchqry = 
    pool.query(qry, [], (err,result) => {
        resp.send((err)?err:result.rows);
    })
}
const getActiveBatchCount = (req, resp) => {
    const qry = `SELECT count(batchid) as active FROM public."Batch" WHERE batchstartdate <= '${req.query.date}' AND batchenddate >= '${req.query.date}'`;
    pool.query(qry, [], (err, result) => {
        resp.send(result.rows);
    })
}

module.exports.getActiveBatchCount = getActiveBatchCount;
module.exports.getBatchCount = getBatchCount;
module.exports.insertBatch = insertBatch;
module.exports.getAllBatchs = getAllBatchs;
module.exports.getAllBatchsByInstructor = getAllBatchsByInstructor;
module.exports.getBatchByCondition = getBatchByCondition;
module.exports.deleteBatch = deleteBatch;
module.exports.updateBatch = updateBatch;
module.exports.getBatchInDuration = getBatchInDuration;
module.exports.getBatchParticipantOverview = getBatchParticipantOverview;