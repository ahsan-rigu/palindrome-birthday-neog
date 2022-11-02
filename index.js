


var date = {
    day: 01,
    month: 01,
    year: 2100,
}

function checkReverseStrEquality(string){
    var stringSeperated = string.split("");
    var stringSeperatedReverser = stringSeperated.reverse();
    var stringReversed = stringSeperatedReverser.join("");
    if (string === stringReversed){
        return true;
        } else {
            return false;
        }
}

function createDateStringObject(date){

    dateStringObject = {day: "", month: "", year: ""};
    
    if (date.day<10){
        dateStringObject.day = "0" + date.day;
    } else dateStringObject.day = date.day;

    if (date.month<10){
        dateStringObject.month = "0" + date.month;
    } else dateStringObject.month = date.month;

    dateStringObject.year = date.year;

    return dateStringObject;
}

function creatAllDateFormats(date){

    var dateStringObject = createDateStringObject(date);

    var ddmmyyyy = dateStringObject.day + dateStringObject.month + dateStringObject.year
    var mmddyyyy = dateStringObject.month + dateStringObject.day + dateStringObject.year
    var yyyymmdd = dateStringObject.year + dateStringObject.month +dateStringObject.day
    var ddmmyy = dateStringObject.day + dateStringObject.month + dateStringObject.year.slice(-2);
    var mmddyy = dateStringObject.month + dateStringObject.day + dateStringObject.year.slice(-2);
    var yymmdd = dateStringObject.year.slice(-2); + dateStringObject.month + dateStringObject.day
    
    var allDateFormats = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];

    return allDateFormats;
}

function isLeapYear(date){
    if((date.year % 4 === 0) && ((date.year % 100 !== 0) || (date.year % 400 === 0))){
        return true;
    } else{
        return false;
    }
}

console.log(isLeapYear(date));


