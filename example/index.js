const {
  getDay,
  getMonth,
  getMonthNumber,
  getYear,
  getWeekdayNumber,
  getFullDate,
  getDate,
  getFullWeekdayDate,
  getMonthYear,
  getMonthNumberYear,
  getHour,
  getFullMinute,
  getMinute,
  getFullSecond,
  getSecond,
  getHourMinute,
  getTime,
  getFullHourMinute,
  getFullTime,
  getDateTime,
  getFullDateTime,
  getCurrentCity,
  getFullCityDate
} = require("../lib");

(async () => {
  console.log(`\ngetDay() =>`, getDay());
  console.log(`\ngetMonth() =>`, getMonth());
  console.log(`\ngetMonthNumber() =>`, getMonthNumber());
  console.log(`\ngetYear() =>`, getYear());
  console.log(`\ngetWeekdayNumber() =>`, getWeekdayNumber());
  console.log(`\ngetDate() =>`, getDate());
  console.log(`\ngetFullDate() =>`, getFullDate());
  console.log(`\ngetFullWeekdayDate() =>`, getFullWeekdayDate());
  console.log(`\ngetMonthYear() =>`, getMonthYear());
  console.log(`\ngetMonthNumberYear() =>`, getMonthNumberYear());
  console.log(`\ngetHour() =>`, getHour());
  console.log(`\ngetFullMinute() =>`, getFullMinute());
  console.log(`\ngetMinute() =>`, getMinute());
  console.log(`\ngetFullSecond() =>`, getFullSecond());
  console.log(`\ngetSecond() =>`, getSecond());
  console.log(`\ngetHourMinute() =>`, getHourMinute());
  console.log(`\ngetTime() =>`, getTime());
  console.log(`\ngetFullHourMinute() =>`, getFullHourMinute());
  console.log(`\ngetFullTime() =>`, getFullTime());
  console.log(`\ngetDateTime() =>`, getDateTime());
  console.log(`\ngetFullDateTime() =>`, getFullDateTime());
  console.log(`\ngetCurrentCity() =>`, await getCurrentCity());
  console.log(`\ngetFullCityDate() =>`, await getFullCityDate());
})();
