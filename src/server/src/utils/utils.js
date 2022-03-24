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
const updateColumnsQuery = (newValues) => {
    let qry = '';
    let len = Object.keys(newValues).length;
    let counter = 0;
    for(let key in newValues)
    {
        counter=counter+1;
        qry = qry+key+'='+'\''+newValues[key]+'\'';
        if(counter !== len)
        {
            qry = qry +' , ';
        }
    }
    return (qry);
}
module.exports.conditionObjToQuery = conditionObjToQuery;
module.exports.updateColumnsQuery = updateColumnsQuery;