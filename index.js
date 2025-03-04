// write your code below!


function happyHolidays(){
    return "Happy holidays!";
}


function happyHolidaysTo(name){
    return `Happy holidays, ${name}!`
}


function happyCustomHolidayTo(holiday, name){
    return `Happy ${holiday}, ${name}!`;
}


function holidayCountdown(holiday, days){
    return `It's ${days} days until ${holiday}!`
}










// Write a function named happyHolidays. This function should not accept any parameters and should return the string "Happy holidays!".

// Write a function named happyHolidaysTo. This function should accept a parameter of the name of the person you want to wish happy holidays, and return the string `Happy holidays, ${name}!`

// Write a function named happyCustomHolidayTo. This function should accept two parameters, the holiday you want to wish them well for, and the name of the person you're wishing well. Order of parameters matters, so make sure to first pass in the holiday and then the name. This function should return the string `Happy ${holiday}, ${name}!`

// Write a function named holidayCountdown. This function should accept two parameters, the holiday name and number of days until that holiday. The function should return the string `It's ${days} days until ${holiday}!`. Note that although days is used first when constructing the returned string, holidayCountdown should take in the holiday name first, then the days until that holiday.