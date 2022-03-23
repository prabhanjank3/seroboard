const conditionObjToQuery = (condition) => {
    let qry = '';
    let len = Object.keys(condition).length;
    let counter = 0;
    for(let key in condition)
    {
        counter=counter+1;
        qry = qry+key+'='+'\''+condition[key]+'\'';
        if(counter !== len)
        {
            qry = qry +' AND ';
        }
    }
    return (qry);
}
module.exports.conditionObjToQuery = conditionObjToQuery;








