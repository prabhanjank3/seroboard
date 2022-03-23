const userdao = require('../dao/userdao');

const insertUser = (req, resp) => {
    userdao.insertUser(req.body,resp);
};
const getAllUsers = (req,resp) => {
    userdao.getAllUsers(resp);
};
const getUserDetails = async (req,resp) => {
    userdao.getUserByCondition({userId: req.params.id}, resp)
}
const deleteUser = async (req, resp) => {
    userdao.deleteUser(req.params.id, resp);
};
const updateUser = async (req, resp) => {
    userdao.updateUser({userid: req.params.id}, req.body, resp);
}
module.exports.insertUser = insertUser;
module.exports.getAllUsers = getAllUsers;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;
module.exports.getUserDetails = getUserDetails;