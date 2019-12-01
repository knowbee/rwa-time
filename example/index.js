const {
  getDay,
  getMonth,
  getMonthNumber,
  getYear,
  getWeekdayNumber,
  getFullDate,
  getDate,
  getFullCityDate,
  getFullWeekdayDate,
  getMonthYear,
  getMonthNumberYear,
  getHour,
  getFullMinute,
  getMinute,
  getFullSecond,
  getSecond
} = require("../lib");

console.log(`\ngetDay() =>`, getDay());
console.log(`\ngetMonth() =>`, getMonth());
console.log(`\ngetMonthNumber() =>`, getMonthNumber());
console.log(`\ngetYear() =>`, getYear());
console.log(`\ngetWeekdayNumber() =>`, getWeekdayNumber());
console.log(`\ngetDate() =>`, getDate());
console.log(`\ngetFullDate() =>`, getFullDate());
console.log(`\ngetFullCityDate() =>`, getFullCityDate("Kigali"));
console.log(`\ngetFullWeekdayDate() =>`, getFullWeekdayDate());
console.log(`\ngetMonthYear() =>`, getMonthYear());
console.log(`\ngetMonthNumberYear() =>`, getMonthNumberYear());
console.log(`\ngetHour() =>`, getHour());
console.log(`\ngetFullMinute() =>`, getFullMinute());
console.log(`\ngetMinute() =>`, getMinute());
console.log(`\ngetFullSecond() =>`, getFullSecond());
console.log(`\ngetSecond() =>`, getSecond());
