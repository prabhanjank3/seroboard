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
const insertMultipleRows = (data) => {
    let qry = '';
    let len = Object.keys(data).length;
    let arrkey = Object.keys(data);
    let arr = (Object.keys(data[arrkey[0]]))
    let counter = 0;
    for(let key in data)
    {
        counter=counter+1;
        qry = qry+`('${Math.floor(Math.random()*1000+1)}','${data[key][arr[0]]}','${data[key][arr[1]]}','${data[key][arr[2]]}')`;
        if(counter !== len)
        {
            qry = qry +' , ';
        }
    }
    return (qry);
}

const insertMultipleUsers = (data) => {
    console.log(data);
    let qry = '';
    let len = Object.keys(data).length;
    let arrkey = Object.keys(data);
    let arr = (Object.keys(data[arrkey[0]]))
    let counter = 0;
    for(let key in data)
    {
        counter=counter+1;
        qry = qry+`('"USR"${Math.floor(Math.random()*1000+1)}','${data[key][arr[0]]}','${data[key][arr[1]]}','${data[key][arr[2]]}','${data[key][arr[3]]}','${data[key][arr[4]]}')`;
        if(counter !== len)
        {
            qry = qry +' , ';
        }
    }
    return (qry);
}

module.exports.conditionObjToQuery = conditionObjToQuery;
module.exports.updateColumnsQuery = updateColumnsQuery;
module.exports.insertMultipleRows = insertMultipleRows;
module.exports.insertMultipleUsers = insertMultipleUsers;