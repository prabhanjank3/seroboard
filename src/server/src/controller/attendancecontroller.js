const attdao = require('../dao/attendancedao');

const getAttendanceData = (req, resp) => {
    attdao.getAttendanceData(req.query, resp);
}
module.exports.getAttendanceData = getAttendanceData;