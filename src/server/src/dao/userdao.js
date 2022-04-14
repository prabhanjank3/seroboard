const pool = require("./configuration/postgresconfig").pool;
const Utils = require("../utils/utils");

const insertUser = async (userObj, resp) => {
  const {
    userid,
    userfirstname,
    userlastname,
    useremail,
    userpassword,
    userrole,
  } = { ...userObj, userid: "USR" + Math.floor(Math.random() * 1000 + 1) };
  const qry = `INSERT INTO public."user" values('${userid}','${userfirstname}', '${userlastname}', '${useremail}', '${userrole}' ,'${userpassword}' ) RETURNING userid,userfirstname, userlastname, useremail, userrole, userpassword`;
  await pool.query(qry, [], (err, result) => {
    resp.send(err ? err : result.rows);
  });
};
// const insertUsers = async (userObj, resp) => {
//   console.log(userObj[0]);
//   for(var i=0;i<userObj.length;i++){
//   const {
//     userid,
//     userfirstname,
//     userlastname,
//     useremail,
//     userpassword,
//     userrole,
//   } = { ...userObj[i], userid: "USR" + Math.floor(Math.random() * 1000 + 1) };
//   console.log( userid,
//     userfirstname,
//     userlastname,
//     useremail,
//     userpassword,
//     userrole)
//     const jsdata = JSON.parse(userObj);
//     console.log(jsdata);

// // pool.query("INSERT INTO `nodes`(`sensorvalue`) VALUES ('"+jsdata.sensorvalue+"')", (err, res) => {
// //     if(err) throw err;
// //     console.log("counter record inserted");  
// // }); 
//   const qry = `INSERT INTO public."user" values('${userid}','${userfirstname}', '${userlastname}', '${useremail}', '${userrole}' ,'${userpassword}' ) RETURNING userid,userfirstname, userlastname, useremail, userrole, userpassword`;
//   await pool.query(qry, [], (err, result) => {
//     resp.send(err ? err : result.rows);
//   });
// }
// };
const insertUsers  = async(req,resp) => {
  const qry = `INSERT INTO public."user" (userid,userfirstname,userlastname,useremail,userpassword,userrole) VALUES ${Utils.insertMultipleUsers(req.body)}`;
  pool.query(qry,[], (err, result) => {
      console.log(err);
      resp.send(err?err:{status:'Success', code:200});
  })
}
const getAllUsers = async (resp) => {
  await pool.query(`SELECT * from public."user"`, [], (err, result) => {
    resp.send(err ? err : result.rows);
  });
};
const getUserByCondition = (condition, resp) => {
  const whereQuery = Utils.conditionObjToQuery(condition);
  pool.query(
    `SELECT * FROM public."user" WHERE ` + whereQuery,
    [],
    (err, result) => {
      resp.send(err ? err : result.rows);
    }
  );
};

const verifyUser = (condition, resp) => {
  const whereQuery = Utils.conditionObjToQuery(condition);
  pool.query(
    `SELECT * FROM public."user" WHERE ` + whereQuery,
    [],
    (err, result) => {
      resp.send(err ? err : result.rows);
    }
  );
};

const deleteUser = (id, resp) => {
  pool.query(
    `DELETE FROM public."user" where userid='${id}'`,
    [],
    (err, result) => {
      resp.send(err ? err : result.rows);
    }
  );
};
const updateUser = (identifier, newValues, resp) => {
  const str = `UPDATE public."user" SET ${Utils.updateColumnsQuery(
    newValues
  )} WHERE ${Utils.conditionObjToQuery(
    identifier
  )} RETURNING userid,userfirstname, userlastname, useremail, userrole, userpassword`;
  pool.query(str, [], (err, result) => {
    resp.send(err ? err : result.rows);
  });
};

module.exports.insertUser = insertUser;
module.exports.insertUsers = insertUsers;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserByCondition = getUserByCondition;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;
