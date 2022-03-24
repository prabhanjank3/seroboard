const getDateInputFormat = (date) => {
    var startDate = new Date(date)
    var year = startDate.getFullYear();
    var month = (startDate.getMonth()<10)?('0'+startDate.getMonth()):startDate.getMonth();
    var day = (startDate.getDate()<10)?'0'+startDate.getDate():startDate.getDate();
    var stDate = year +'-'+month+'-'+day;
    return stDate;
}
export { getDateInputFormat };