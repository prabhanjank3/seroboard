const assignmentdao = require('../dao/assignmentdao');
const insertAssignment = (req, resp) => {
    assignmentdao.insertAssignment(req.body,resp);
};
const getAllAssignment = (req,resp) => {
    assignmentdao.getAllAssignment(req.query.batchid,resp);
};
const deleteAssignment = async (req, resp) => {
    assignmentdao.deleteAssignment(req.params.id, resp);
};
const updateAssignment = async (req, resp) => {
    assignmentdao.updateAssignment({assignmentid: req.params.id}, req.body, resp);
}
module.exports.insertAssignment = insertAssignment;
module.exports.getAllAssignment = getAllAssignment;
module.exports.deleteAssignment = deleteAssignment;
module.exports.updateAssignment = updateAssignment;