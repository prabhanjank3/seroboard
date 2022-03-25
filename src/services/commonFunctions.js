const getDateInputFormat = (date) => {
    var startDate = new Date(date)
    var year = startDate.getFullYear();
    var month = (startDate.getMonth()+1<10)?('0'+(startDate.getMonth()+1)):startDate.getMonth()+1;
    var day = (startDate.getDate()<10)?'0'+startDate.getDate():startDate.getDate();
    var stDate = year +'-'+month+'-'+day;
    return stDate;
}
export { getDateInputFormat };