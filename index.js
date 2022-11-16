var bdInputRef = document.querySelector('#bd-input');
var checkButtonRef = document.querySelector('#check-button');
var outputDivRef = document.querySelector('#output-div');

function checkReverseStrEquality(string){
    var stringSeperated = string.split("");
    var stringSeperatedReversed = stringSeperated.reverse();
    var stringReversed = stringSeperatedReversed.join("");
    return (string === stringReversed);
}

function createDateStringObject(date){

    dateStringObject = {day: "", month: "", year: ""};
    
    if (date.day<10){
        dateStringObject.day = "0" + date.day;
    } else dateStringObject.day = date.day.toString();

    if (date.month<10){
        dateStringObject.month = "0" + date.month;
    } else dateStringObject.month = date.month.toString();

    dateStringObject.year = date.year.toString();

    return dateStringObject;
}

function creatAllDateFormats(date){
    var dateStringObject = createDateStringObject(date);
    
    var ddmmyyyy = dateStringObject.day + dateStringObject.month + dateStringObject.year
    var mmddyyyy = dateStringObject.month + dateStringObject.day + dateStringObject.year
    var yyyymmdd = dateStringObject.year + dateStringObject.month +dateStringObject.day
    var ddmmyy = dateStringObject.day + dateStringObject.month + dateStringObject.year.slice(-2);
    var mmddyy = dateStringObject.month + dateStringObject.day + dateStringObject.year.slice(-2);
    var yymmdd = dateStringObject.year.slice(-2) + dateStringObject.month + dateStringObject.day
    
    var allDateFormats = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
   

    return allDateFormats;
}

function checkPallindromeForAllDates(date){
    var allDateFormats = creatAllDateFormats(date);
    var isPallindrome = false;
    for(var i = 0; i<allDateFormats.length ; i++){
        if(checkReverseStrEquality(allDateFormats[i])){
            isPallindrome = true;
            break;
        }
        
    }
    return isPallindrome;
}

function getNextdate(date){
    var day = date.day;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(isLeapYear(date)){
        daysInMonth[1]=29;
    }
    day++;
    if (day>daysInMonth[month-1]){
        day = 1;
        month++;
    }

    if(month>12){
        month = 1;
        year++;
    }

    return{
        day: day,
        month: month,
        year: year
    }
}

function getPreviousdate(date){
    var day = date.day;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(isLeapYear(date)){
        daysInMonth[1]=29;
    }
    day--;
    if (day<0){
        month--;
        day=daysInMonth[month-1]
    }

    if(month<0){
        month = 12;
        year--;
    }

    return{
        day: day,
        month: month,
        year: year
    }
}

function isLeapYear(date){
    if((date.year % 4 === 0) && ((date.year % 100 !== 0) || (date.year % 400 === 0))){
        return true;
    } else{
        return false;
    }
}

function findClosestPallindromeDate(date){
    var daysFromPallindrome = 0;
    var nextDate = getNextdate(date);
    var previousDate = getPreviousdate(date);
    while(true){
        daysFromPallindrome++;
        var isPallindrome = checkPallindromeForAllDates(nextDate);
        if(isPallindrome) {
            return [daysFromPallindrome, nextDate];}
        isPallindrome = checkPallindromeForAllDates(previousDate);
        if(isPallindrome){
            return [daysFromPallindrome, previousDate];
        }
        nextDate = getNextdate(nextDate);
        previousDate = getPreviousdate(previousDate);
    }
}

function clickHandeller(){
    var dateString = bdInputRef.value;
    var dateSplit = dateString.split('-');
    
    if(dateString !== ''){
        var date = {
            day: Number(dateSplit[2]),
            month: Number(dateSplit[1]),
            year: Number(dateSplit[0])
            }
        if (checkPallindromeForAllDates(date)){
            outputDivRef.textContent = "Yayy your birthday is a pallindrome";
        } else{
            var [daysFromPallindrome, closestDate] = findClosestPallindromeDate(date);
            var heyyy;
            outputDivRef.textContent = "the next pallindrome date is " + closestDate.day + "-" + closestDate.month + "-" + closestDate.year +  " its " + daysFromPallindrome + "days away ";
            console.log(daysFromPallindrome);
            console.log(closestDate);
        
        }

        
            

    }


}

checkButtonRef.addEventListener('click', clickHandeller);





