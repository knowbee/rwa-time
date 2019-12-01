let day = "";
let monthNumber = "";
let formatedMonthNumber = "";
let formatedMonth = "";
let month = "";
let year = "";
let weekdayNumber = "";
let weekday = "";
let hour = "";
let minute = "";
let second = "";
let date = "";
let isDateValid = true;
let invalidMessage = "Invalid Date";
exports.rwaDate = (d = new Date()) => {
  try {
    isDateValid = true;
    date = new Date(d);
    day = date.getDate();
    monthNumber = date.getMonth() + 1;
    formatedMonthNumber = date.getMonth() + 1;
    year = date.getFullYear();
    weekdayNumber = date.getDay() + 1;
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    if (day.toString().length === 1) day = "0" + day;
    if (monthNumber.toString().length === 1) monthNumber = "0" + monthNumber;
    if (formatedMonthNumber.toString().length === 1)
      formatedMonthNumber = "0" + formatedMonthNumber;
    if (hour.toString().length === 1) hour = "0" + hour;

    if (minute.toString().length === 1) minute = "0" + minute;

    if (second.toString().length === 1) second = "0" + second;

    switch (weekdayNumber) {
      case 1:
        weekday = "Ku Cyumweru";
        break;
      case 2:
        weekday = "Kuwa Mbere";
        break;
      case 3:
        weekday = "Kuwa Kabiri";
        break;
      case 4:
        weekday = "Kuwa Gatatu";
        break;
      case 5:
        weekday = "Kuwa Kane";
        break;
      case 6:
        weekday = "Kuwa Gatanu";
        break;
      case 7:
        weekday = "Kuwa Gatandatu";
        break;
    }
    switch (String(monthNumber)) {
      case "01":
        month = "Mutarama";
        break;
      case "02":
        month = "Gashyantare";
        break;
      case "03":
        month = "Werurwe";
        break;
      case "04":
        month = "Mata";
        break;
      case "05":
        month = "Gicurasi";
        break;
      case "06":
        month = "Kamena";
        break;
      case "07":
        month = "Nyakanga";
        break;
      case "08":
        month = "Kanama";
        break;
      case "09":
        month = "Nzeri";
        break;
      case "10":
        month = "Ukwakira";
        break;
      case "11":
        month = "Ugushyingo";
        break;
      case "12":
        month = "Ukuboza";
        break;
    }
  } catch (err) {
    isDateValid = false;
  }
};
