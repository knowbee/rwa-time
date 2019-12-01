const http = require("http");

class RwaTime {
  constructor() {
    this.day = "";
    this.monthNumber = "";
    this.formatedMonthNumber = "";
    this.formatedMonth = "";
    this.month = "";
    this.year = "";
    this.weekdayNumber = "";
    this.weekday = "";
    this.hour = "";
    this.minute = "";
    this.second = "";
    this.date = "";
    this.isDateValid = true;
    this.invalidMessage = "Invalid Date";
    this.city = "";
    this.region = "";
    this.country = "";
    this.shortCountry = "";
    this.timezone = "";
    this.zipcode = "";

    this.setDefaults();
  }

  setDefaults() {
    this.delDate = "/";
    this.delTime = ":";
    this.dateTimeSep = ", ";
    this.dateSep = " n'";
    this.timeSep = " n'";
  }

  // Change config variables
  config(newProps) {
    this.delDate = newProps.delDate || "/";
    this.delTime = newProps.delTime || ":";
    this.dateTimeSep = newProps.dateTimeSep || ", ";
    this.dateSep = newProps.dateSep || " n'";
    this.timeSep = newProps.timeSep || " n'";
  }

  rwaDate(date) {
    try {
      this.isDateValid = true;
      this.date = new Date(date);
      if (this.date == "Invalid Date")
        throw new Error(`${date} is not a valid date`);
      this.day = this.date.getDate();
      this.monthNumber = this.date.getMonth() + 1;
      this.formatedMonthNumber = this.date.getMonth() + 1;
      this.year = this.date.getFullYear();
      this.weekdayNumber = this.date.getDay() + 1;
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();

      if (this.day.toString().length === 1) this.day = "0" + this.day;
      if (this.monthNumber.toString().length === 1)
        this.monthNumber = "0" + this.monthNumber;
      if (this.formatedMonthNumber.toString().length === 1)
        this.formatedMonthNumber = "0" + this.formatedMonthNumber;
      if (this.hour.toString().length === 1) this.hour = "0" + this.hour;

      if (this.minute.toString().length === 1) this.minute = "0" + this.minute;

      if (this.second.toString().length === 1) this.second = "0" + this.second;

      switch (this.weekdayNumber) {
        case 1:
          this.weekday = "Ku Cyumweru";
          break;
        case 2:
          this.weekday = "Kuwa Mbere";
          break;
        case 3:
          this.weekday = "Kuwa Kabiri";
          break;
        case 4:
          this.weekday = "Kuwa Gatatu";
          break;
        case 5:
          this.weekday = "Kuwa Kane";
          break;
        case 6:
          this.weekday = "Kuwa Gatanu";
          break;
        case 7:
          this.weekday = "Kuwa Gatandatu";
          break;
      }
      switch (String(this.monthNumber)) {
        case "01":
          this.month = "Mutarama";
          break;
        case "02":
          this.month = "Gashyantare";
          break;
        case "03":
          this.month = "Werurwe";
          break;
        case "04":
          this.month = "Mata";
          break;
        case "05":
          this.month = "Gicurasi";
          break;
        case "06":
          this.month = "Kamena";
          break;
        case "07":
          this.month = "Nyakanga";
          break;
        case "08":
          this.month = "Kanama";
          break;
        case "09":
          this.month = "Nzeri";
          break;
        case "10":
          this.month = "Ukwakira";
          break;
        case "11":
          this.month = "Ugushyingo";
          break;
        case "12":
          this.month = "Ukuboza";
          break;
      }
      switch (String(this.hour)) {
        case "00":
          this.hour = "Saa Sita";
          break;
        case "01":
          this.hour = "Saa Saba";
          break;
        case "02":
          this.hour = "Saa Munani";
          break;
        case "03":
          this.hour = "Saa Cyenda";
          break;
        case "04":
          this.hour = "Saa Kumi";
          break;
        case "05":
          this.hour = "Saa Kumi n'Imwe";
          break;
        case "06":
          this.hour = "Saa Kumi n'Ebyiri";
          break;
        case "07":
          this.hour = "Saa Moya";
          break;
        case "08":
          this.hour = "Saa Mbiri";
          break;
        case "09":
          this.hour = "Saa Tatu";
          break;
        case "10":
          this.hour = "Saa Yine";
          break;
        case "11":
          this.hour = "Saa Tanu";
          break;
        case "12":
          this.hour = "Saa Sita";
          break;
        case "13":
          this.hour = "Saa Saba";
          break;
        case "14":
          this.hour = "Saa Munani";
          break;
        case "15":
          this.hour = "Saa Cyenda";
          break;
        case "16":
          this.hour = "Saa Kumi";
          break;
        case "17":
          this.hour = "Saa Kumi n'Imwe";
          break;
        case "18":
          this.hour = "Saa Kumi n'Ebyiri";
          break;
        case "19":
          this.hour = "Saa Moya";
          break;
        case "20":
          this.hour = "Saa Mbiri";
          break;
        case "21":
          this.hour = "Saa Tatu";
          break;
        case "22":
          this.hour = "Saa Yine";
          break;
        case "23":
          this.hour = "Saa Tanu";
          break;
        case "24":
          this.hour = "Saa Sita";
          break;
      }
      switch (String(this.formatedMonthNumber)) {
        case "01":
          this.formatedMonth = "Mbere";
          break;
        case "02":
          this.formatedMonth = "Kabiri";
          break;
        case "03":
          this.formatedMonth = "Gatatu";
          break;
        case "04":
          this.formatedMonth = "Kane";
          break;
        case "05":
          this.formatedMonth = "Gatanu";
          break;
        case "06":
          this.formatedMonth = "Gatandatu";
          break;
        case "07":
          this.formatedMonth = "Karindwi";
          break;
        case "08":
          this.formatedMonth = "Munani";
          break;
        case "09":
          this.formatedMonth = "Cyenda";
          break;
        case "10":
          this.formatedMonth = "Cumi";
          break;
        case "11":
          this.formatedMonth = "Cumi Na Kumwe";
          break;
        case "12":
          this.formatedMonth = "Cumi Na Kabiri";
          break;
      }
    } catch (err) {
      this.isDateValid = false;
    }
  }

  getDay(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid ? this.day : this.invalidMessage;
  }

  getMonthNumber(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid ? this.monthNumber : this.invalidMessage;
  }

  getMonth(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid ? this.month : this.invalidMessage;
  }

  getYear(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid ? this.year : this.invalidMessage;
  }

  getWeekdayNumber(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid ? this.weekdayNumber : this.invalidMessage;
  }
  getWeekday(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid ? this.weekday : this.invalidDate;
  }

  getDate(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid
      ? `${this.day}${this.delDate}${this.monthNumber}${this.delDate}${this.year}`
      : this.invalidMessage;
  }

  getFullDate(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid
      ? `${this.day}, ${this.month} ${this.year}`
      : this.invalidMessage;
  }

  getFullWeekdayDate(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid
      ? `${this.weekday}, Taliki ya ${this.day} z'ukwa ${this.formatedMonth} ${this.year}`
      : this.invalidMessage;
  }

  getMonthYear(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid
      ? `${this.month}${this.delDate}${this.year}`
      : this.invalidMessage;
  }

  getMonthNumberYear(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid
      ? `${this.monthNumber}/${this.year}`
      : this.invalidMessage;
  }

  getHour(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid ? this.hour : this.invalidMessage;
  }

  getMinute(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid ? this.minute : this.invalidMessage;
  }

  getFullMinute(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid
      ? `${this.minute !== "01" ? "iminota" : "umunota"} ${this.minute}`
      : this.invalidMessage;
  }

  getSecond(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid ? this.second : this.invalidMessage;
  }

  getFullSecond(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid
      ? `${this.second !== "01" ? "amasegonda" : "isegonda"} ${this.second}`
      : this.invalidMessage;
  }

  getTime(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid
      ? `${this.hour}${this.timeSep}${
          this.minute !== "01" ? "iminota" : "umunota"
        } ${this.minute}${this.timeSep}${
          this.second !== "01" ? "amasegonda" : "isegonda"
        } ${this.second}`
      : this.invalidMessage;
  }

  getHourMinute(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid
      ? `${this.hour}${this.timeSep}${
          this.minute !== "01" ? "iminota" : "umunota"
        } ${this.minute}`
      : this.invalidMessage;
  }

  getDateTime(date = new Date()) {
    this.rwaDate(date);
    return this.isDateValid
      ? `${this.day}${this.delDate}${this.monthNumber}${this.delDate}${
          this.year
        } ${this.hour}${this.timeSep}${
          this.minute !== "01" ? "iminota" : "umunota"
        } ${this.minute}${this.timeSep}${
          this.second !== "01" ? "amasegonda" : "isegonda"
        } ${this.second}`
      : this.invalidMessage;
  }

  async getFullShortCountryDate(date = new Date()) {
    this.rwaDate(date);
    await this.getShortCountry();
    return this.isDateValid
      ? `${this.shortCountry}, ${this.day} ${this.month} ${this.year}`
      : this.invalidMessage;
  }
  async getFullCityDate(date = new Date()) {
    this.rwaDate(date);
    await this.getCity();
    return this.isDateValid
      ? `${this.city}, ${this.day} ${this.month} ${this.year}`
      : this.invalidMessage;
  }
  async getCity() {
    if (this.city === "") await this.getUserLocation();
    return this.city;
  }
  async getRegion() {
    if (this.region === "") await this.getUserLocation();
    return this.region;
  }

  async getCountry() {
    if (this.country === "") await this.getUserLocation();
    return this.country;
  }

  async getTimezone() {
    if (this.timezone === "") await this.getUserLocation();
    return this.timezone;
  }

  async getZipcode() {
    if (this.zipcode === "") await this.getUserLocation();
    return this.zipcode;
  }
  async getShortCountry() {
    if (this.shortCountry === "") await this.getUserLocation();
    return this.shortCountry;
  }

  async getUserLocation() {
    return new Promise(async (resolve, reject) => {
      let req = await http.get("http://ip-api.com/json", res => {
        let data = "";
        let resData = "";

        res.on("data", stream => {
          data += stream;
        });
        res.on("end", () => {
          resData = JSON.parse(data);
          this.city = resData.city;
          this.region = resData.regionName;
          this.shortRegion = resData.region;
          this.country = resData.country;
          this.shortCountry = resData.countryCode;
          this.timezone = resData.timezone;
          this.zipcode = resData.zip;

          resolve();
        });
      });

      req.on("error", e => {
        console.log(e.message);
        reject(e.message);
      });
    });
  }
}

module.exports = RwaTime;
