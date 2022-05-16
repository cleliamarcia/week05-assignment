/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function(date) {
  const listMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let YY = date.substring(0,4);
  let MM = listMonth[date.substring(5,7) -1];
  let DD = date.substring(8,10);
  if (DD < 10) {
    DD = DD.substring(1,2);
  }
  switch (DD) {
    case "1":
    case "21":
    case "31":
      DD += "st";
      break;
    case "2":
    case "22":
      DD += "nd";
      break;
    case "3","23":
      DD += "rd";
      break;
    default:
      DD += "th";
  }

  return MM + " " + DD + ", " + YY;

};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
