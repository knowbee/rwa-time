const RwaTime = require("../lib");
const date = new RwaTime();
(async () => {
  console.log(`\ngetDay() =>`, date.getDay("24HJERH87LK4"));
  console.log(`\ngetMonth() =>`, date.getMonth());
  console.log(
    `\ngetMonthNumber() =>`,
    date.getMonthNumber("05 October 2011 14:48 UTC")
  );
  console.log(`\ngetYear() =>`, date.getYear());
  console.log(`\ngetWeekdayNumber() =>`, date.getWeekdayNumber());
  console.log(
    `\ngetWeekday() =>`,
    date.getWeekday("05 October 2011 14:48 UTC")
  );
  console.log(`\ngetDate() =>`, date.getDate());
  console.log(`\ngetFullDate() =>`, date.getFullDate());
  console.log(`\ngetFullWeekdayDate() =>`, date.getFullWeekdayDate());
  console.log(`\ngetMonthYear() =>`, date.getMonthYear());
  console.log(`\ngetMonthNumberYear() =>`, date.getMonthNumberYear());
  console.log(`\ngetHour() =>`, date.getHour());
  console.log(`\ngetFullMinute() =>`, date.getFullMinute());
  console.log(`\ngetMinute() =>`, date.getMinute());
  console.log(`\ngetFullSecond() =>`, date.getFullSecond());
  console.log(`\ngetSecond() =>`, date.getSecond());
  console.log(`\ngetHourMinute() =>`, date.getHourMinute());
  console.log(
    `\ngetTime() =>`,
    date.getTime("Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)")
  );
  console.log(`\ngetDateTime() =>`, date.getDateTime("07/24/2015"));
  console.log(`\ngetCity() =>`, await date.getCity());
  console.log(`\ngetFullCityDate() =>`, await date.getFullCityDate());
  console.log(`\ngetRegion() =>`, await date.getRegion());
  console.log(`\ngetCountry() =>`, await date.getCountry());
  console.log(`\ngetTimezone() =>`, await date.getTimezone());
  console.log(`\ngetZipcode() =>`, await date.getZipcode());
  console.log(`\ngetShortCountry() =>`, await date.getShortCountry());
  console.log(
    `\ngetFullShortCountryDate() =>`,
    await date.getFullShortCountryDate()
  );
})();
