const attdao = require('../dao/attendancedao');

const getAttendanceData = (req, resp) => {
    attdao.getAttendanceData(req.query, resp);
}
const submitAttendanceReport = (req, resp) => {
    attdao.markAttendance(req.body, resp);
}
const deleteAttReportByCondition = async (req, resp) => {
    attdao.deleteAttReportByCondition(req.query,resp);
};
module.exports.getAttendanceData = getAttendanceData;
module.exports.submitAttendanceReport = submitAttendanceReport;
module.exports.deleteAttReportByCondition = deleteAttReportByCondition;