const postassrectdao = require('../dao/postassrecorddao');

const getPostAssessmentRecord = (req, resp) => {
    postassrectdao.getPostAssessmentRecord(req.query, resp);
}
const markPostAssessmentScore = (req, resp) => {
    postassrectdao.markPostAssessmentScore(req.body, resp);
}
const deleteAttReportByCondition = async (req, resp) => {
    attdao.deleteAttReportByCondition(req.query,resp);
};
module.exports.getPostAssessmentRecord = getPostAssessmentRecord;
module.exports.markPostAssessmentScore = markPostAssessmentScore;
