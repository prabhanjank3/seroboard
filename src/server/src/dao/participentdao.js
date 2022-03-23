
const insertParticipent = (participentObj) => {
    var participentrec = new Participent({...participentObj, participentId: 'API'+Math.floor(Math.random()*100+1)});
    return participentrec.save();
};
const getAllParticipents = () => {
    return Participent.find();
};
const getParticipentByCondition = (condition) => {
    return Participent.find(condition);
};
const deleteParticipent = (id) => {
    return Participent.deleteOne({participentId: id});
};
const updateParticipent = (identifier, newValues) => {
    return Participent.updateOne(identifier, newValues);
}

module.exports.insertParticipent = insertParticipent;
module.exports.getAllParticipents = getAllParticipents;
module.exports.getParticipentByCondition = getParticipentByCondition;
module.exports.deleteParticipent = deleteParticipent;
module.exports.updateParticipent = updateParticipent;