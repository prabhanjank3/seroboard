const postassdao = require('../dao/postassdao');
const insertPostass = (req, resp) => {
    postassdao.insertPostass(req.body,resp);
};
const getAllPostass = (req,resp) => {
    postassdao.getAllPostass(req.query.batchid,resp);
};
const deletePostass = async (req, resp) => {
    postassdao.deletePostass(req.params.id, resp);
};
const updatePostass = async (req, resp) => {
    postassdao.updatePostass({postassid: req.params.id}, req.body, resp);
}
module.exports.insertPostass = insertPostass;
module.exports.getAllPostass = getAllPostass;
module.exports.deletePostass = deletePostass;
module.exports.updatePostass = updatePostass;