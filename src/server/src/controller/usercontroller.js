const userdao = require("../dao/userdao");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.REACT_APP_SERO_BOARD_CLIENT_ID);

const insertUser = (req, resp) => {
  userdao.insertUser(req.body, resp);
};
const getAllUsers = (req, resp) => {
  userdao.getAllUsers(resp);
};
const getUserDetails = async (req, resp) => {
  userdao.getUserByCondition({ userId: req.params.id }, resp);
};
const getUserDetailsByEmail = async (req, resp) => {
  if (req.body?.email && req.body?.password) {
    const email = req.body?.email;
    //ToDo: Check for password
    // userdao.getUserByCondition({ useremail: email }, resp);
    userdao.getAllUsersEmail(email, resp);
  } else {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.REACT_APP_SERO_BOARD_CLIENT_ID,
    });
    const { email } = ticket.getPayload();
    // userdao.getUserByCondition({ /-: email }, resp);
    userdao.getAllUsersEmail(email, resp);
  }
};
const deleteUser = async (req, resp) => {
  userdao.deleteUser(req.params.id, resp);
};
const updateUser = async (req, resp) => {
  userdao.updateUser({ userid: req.params.id }, req.body, resp);
};
module.exports.insertUser = insertUser;
module.exports.getAllUsers = getAllUsers;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;
module.exports.getUserDetails = getUserDetails;
module.exports.getUserDetailsByEmail = getUserDetailsByEmail;
