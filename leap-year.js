// make a function for checking is my input year is a leap year or not:
function checkLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return year + ' is a leap year';
    }
    return year + ' is not a leap year';
}

let myInput = checkLeapYear(2004);
console.log(myInput);