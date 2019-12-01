const {
  getDay,
  getMonth,
  getMonthNumber,
  getYear,
  getWeekdayNumber,
  getFullDate,
  getDate,
  getFullCityDate
} = require("../lib");
console.log(`\ngetDay() =>`, getDay());
console.log(`\ngetMonth() =>`, getMonth());
console.log(`\ngetMonthNumber() =>`, getMonthNumber());
console.log(`\ngetYear() =>`, getYear());
console.log(`\ngetWeekdayNumber() =>`, getWeekdayNumber());
console.log(`\ngetDate() =>`, getDate());
console.log(`\ngetFullDate() =>`, getFullDate());
console.log(`\ngetFullCityDate() =>`, getFullCityDate("Kigali"));
