const date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date('1997-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// Expected output: false

console.log(date1 - date2);
console.log(new Date(date1 - date2)) //returns the formatted 


const birthday = new Date('August 19, 1975 23:15:30');
birthday.getDate(); //19

birthday.getDay() // MONDAY
birthday.getFullYear(); //1975
birthday.getHours() //23
birthday.getMilliseconds() //milliseconds in the time
birthday.getSeconds() //30
birthday.getMinutes() //15
birthday.getMonth() // 07

birthday.getTime() // number of milliseconds after 1970 jan 1;
birthday.getFullYear() //95 -> difference between 1900 to the time


// getTime ()
Date.now(), Date.parse(), date1.valueOf();

// set time

event.setDate(24);
event.setFullYear(1969);
event.setHours(20);
event.getMilliseconds();
event.getMinutes();
event.setMonth(3);
event.setSeconds(42);
event.setTime(/* epoch */)
event.setYear()


event.toString() //Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)
event.toDateString() //Wed Jul 28 1993
event.toISOString() //2011-10-05T14:48:00.000Z
event.toJSON() //1975-08-19T23:15:30.000Z