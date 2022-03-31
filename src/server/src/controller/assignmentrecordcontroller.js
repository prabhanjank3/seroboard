const assignmentrectdao = require('../dao/assignmentrecdao');

const getAssignmentRecord = (req, resp) => {
    assignmentrectdao.getAssignmentRecord(req.query, resp);
}
const markAssignmentScore = (req, resp) => {
    assignmentrectdao.markAssignmentScore(req.body, resp);
}
const deleteAttReportByCondition = async (req, resp) => {
    attdao.deleteAttReportByCondition(req.query,resp);
};
module.exports.getAssignmentRecord = getAssignmentRecord;
module.exports.markAssignmentScore = markAssignmentScore;
