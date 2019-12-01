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
    switch (hour) {
      case "01":
        hour = "Saa Saba";
        break;
      case "02":
        hour = "Saa Munani";
        break;
      case "03":
        hour = "Saa Cyenda";
        break;
      case "04":
        hour = "Saa Kumi";
        break;
      case "05":
        hour = "Saa Kumi n'Imwe";
        break;
      case "06":
        hour = "Saa Kumi n'Ebyiri";
        break;
      case "07":
        hour = "Saa Moya";
        break;
      case "08":
        hour = "Saa Mbiri";
        break;
      case "09":
        hour = "Saa Tatu";
        break;
      case "10":
        hour = "Saa Yine";
        break;
      case "11":
        hour = "Saa Tanu";
        break;
      case "12":
        hour = "Saa Sita";
        break;
    }
    switch (String(formatedMonthNumber)) {
      case "01":
        formatedMonth = "Mbere";
        break;
      case "02":
        formatedMonth = "Kabiri";
        break;
      case "03":
        formatedMonth = "Gatatu";
        break;
      case "04":
        formatedMonth = "Kane";
        break;
      case "05":
        formatedMonth = "Gatanu";
        break;
      case "06":
        formatedMonth = "Gatandatu";
        break;
      case "07":
        formatedMonth = "Karindwi";
        break;
      case "08":
        formatedMonth = "Munani";
        break;
      case "09":
        formatedMonth = "Cyenda";
        break;
      case "10":
        formatedMonth = "Cumi";
        break;
      case "11":
        formatedMonth = "Cumi Na Kumwe";
        break;
      case "12":
        formatedMonth = "Cumi Na Kabiri";
        break;
    }
  } catch (err) {
    isDateValid = false;
  }
};

exports.getDay = (date = new Date()) => {
  this.rwaDate(date);
  return isDateValid ? day : invalidMessage;
};

exports.getMonthNumber = (date = new Date()) => {
  this.rwaDate(date);
  return isDateValid ? monthNumber : invalidMessage;
};

exports.getMonth = (date = new Date()) => {
  this.rwaDate(date);
  return isDateValid ? month : invalidMessage;
};

exports.getYear = (date = new Date()) => {
  this.rwaDate(date);
  return isDateValid ? year : invalidMessage;
};

exports.getWeekdayNumber = (date = new Date()) => {
  this.rwaDate(date);
  return isDateValid ? weekdayNumber : invalidMessage;
};

exports.getDate = (sep = "/", date = new Date()) => {
  this.rwaDate(date);
  return isDateValid
    ? `${day}${sep}${monthNumber}${sep}${year}`
    : invalidMessage;
};

exports.getFullDate = (date = new Date()) => {
  this.rwaDate(date);
  return isDateValid ? `${day}, ${month} ${year}` : invalidMessage;
};

exports.getFullCityDate = (city, date = new Date()) => {
  this.rwaDate(date);
  return isDateValid
    ? `${city}, ${day} z'ukwa ${formatedMonth} ${year}`
    : invalidMessage;
};

exports.getFullWeekdayDate = (date = new Date()) => {
  this.rwaDate(date);
  return isDateValid
    ? `${weekday}, Taliki ya ${day} z'ukwa ${formatedMonth} ${year}`
    : invalidMessage;
};

exports.getMonthYear = (date = new Date()) => {
  this.rwaDate(date);
  return isDateValid ? `${month}/${year}` : invalidMessage;
};

exports.getMonthNumberYear = (date = new Date()) => {
  this.rwaDate(date);
  return isDateValid ? `${monthNumber}/${year}` : invalidMessage;
};

exports.getHour = (date = new Date()) => {
  this.rwaDate(date);
  return isDateValid ? hour : invalidMessage;
};
