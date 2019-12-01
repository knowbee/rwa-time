# rwa-time

[![Build Status](https://travis-ci.org/knowbee/rwa-time.svg?branch=master)](https://travis-ci.org/knowbee/rwa-time)

[![NPM](https://nodei.co/npm/rwa-time.png)](https://nodei.co/npm/rwa-time/)

Get current date in Kinyarwanda (rw) or format other dates to Kinyarwanda (rw).

**Table of content**

- [Installation](#installation)
  - [Scripts](#scripts)
  - [Usage](#usage)
- [Rwa-Time Date Functions](#date-functions)
  - [getDay(date)](#getdaydate)
  - [getMonth(date)](#getmonthdate)
  - [getMonthNumber(date)](#getmonthnumberdate)
  - [getYear(date)](#getyeardate)
  - [getWeekdayNumber(date)](#getweekdaynumberdate)
  - [getDate(date)](#getdate)
  - [getFullDate(date)](#getfulldate)
  - [getFullWeekdayDate(date)](#getfullweekdaydate)
  - [getMonthNumberYear(date)](#getmonthnumberyeardate)
  - [getHour(date)](#gethourdate)
  - [getMinute(date)](#getminutedate)
  - [getFullMinute(date)](#getFullminutedate)
  - [getSecond(date)](#getseconddate)
  - [getFullSecond(date)](#getFullseconddate)
  - [getTime(date)](#gettimedate)
  - [getHourMinute(date)](#gethourminutedate)
  - [getTime(date)](#getimedate)
  - [getDateTime(date)](#getdatetimedate)
  - [getFullCityDate(date)](#getFullcitydatedate)
  - [getShortCountryDate(date)](#getFullshortcountrydatedate)
  - [Current Locale Functions](#current-locale-functions)
  - [getCity()](#getcity)
  - [getRegion()](#getregion)
  - [getCountry()](#getcountry)
  - [getShortCountry()](#getshortcountry)
  - [getTimezone()](#gettimezone)
- [License](#license)

---

## Installation

via npm:

```sh
npm i -S rwa-time
```

via yarn:

```sh
yarn add rwa-time
```

### Scripts

view all available functions:

```sh
yarn all
```

```sh
npm run all
```

### Usage

```javascript
const RwaTime = require("rwa-time");
const date = new RwaTime();

console.log(date.getFullDate()); // 01, Ukuboza 2019
```

## Date Functions

All functions below receive an **optional** date as a parameter. If no date is passed the function uses the **current** date.

- {string} **date** - accepts various formats _(optional)_

**e.g.**:

```javascript
date.getDateTime('05/07/2019 08:54:32') // => 07/05/2019 Saa Mbiri n'iminota 54 n'amasegonda 32

date.getTime('05/07/2019 08:54:32') // => Saa Mbiri n'iminota 54 n'amasegonda 32

date.getDate('October 15, 1996 05: 35: 32') // => 15/10/1996

date.getFullWeekdayDate('2017-09-08T15:25:53Z') // => Kuwa Gatanu, Taliki ya 08 z'ukwa Cyenda 2017

date.getMonthNumber('05 October 2011 14:48 UTC') // => 10

date.getDateTime('07/24/2015') // => 24/07/2015 Saa Sita n'iminota 00 n'amasegonda 00

date.getWeekdayNumber('05 October 2011 14:48 UTC') // => 4

date.getWeekday('05 October 2011 14:48 UTC') // => Kuwa Gatatu

date.getTime('Wed Sept 05 2011 16:48:00 GMT+0200 (CEST)' // => Saa Kumi n'iminota 48 n'amasegonda 00

date.getDay('20HJERH87LK4') // => Invalid Date
```

If the date passed is invalid, functions will return **'Invalid Date'**.

### getDay(date)

- returns day **(01 a 31)**

```javascript
let dt = date.getDay(); // => 01
```

### getMonthNumber(date)

- returns month number **(01 a 12)**

```javascript
let dt = date.getMonthNumber(); // => 10
```

### getMonth(date)

```javascript
let dt = date.getMonth(); // => Ukuboza
```

| number | month       |
| :----- | :---------- |
| 01     | Mutarama    |
| 02     | Gashyantare |
| 03     | Werurwe     |
| 04     | Mata        |
| 05     | Gicurasi    |
| 06     | Kamena      |
| 07     | Nyakanga    |
| 08     | Kanama      |
| 09     | Nzeri       |
| 10     | Ukwakira    |
| 11     | Ugushyingo  |
| 12     | Ukuboza     |

### getYear(date)

```javascript
let dt = date.getYear(); // => 2019
```

### getWeekdayNumber(date)

- returns the number of the week **(1 a 7)**

```javascript
let dt = date.getWeekdayNumber(); // => 1
```

### getWeekday(date)

```javascript
let dt = date.getWeekday(); // => Ku Cyumweru
```

| number | weekday        |
| :----- | :------------- |
| 1      | Ku Cyumweru    |
| 2      | Kuwa Mbere     |
| 3      | Kuwa Kabiri    |
| 4      | Kuwa Gatatu    |
| 5      | Kuwa Kane      |
| 6      | Kuwa Gatanu    |
| 7      | Kuwa Gatandatu |

### getDate(date)

```javascript
let dt = date.getDate(); // => 01/12/2019
```

### getFullDate(date)

```javascript
let dt = date.getFullDate(); // => 01, Ukuboza 2019
```

### getFullWeekdayDate(date)

```javascript
let dt = date.getFullWeekdayDate(); // =>  Ku Cyumweru, Taliki ya 01 z'ukwa Cumi Na Kabiri 2019
```

### getMonthNumberYear(date)

```javascript
let dt = date.getMonthNumberYear(); // => 12/2019
```

### getMonthYear(date)

```javascript
let dt = date.getMonthYear(); // => Ukuboza/2019
```

### getHour(date)

- return hours **(01 a 23)**

```javascript
let dt = date.getHour(); // => Saa Munani
```

### getTime(date)

```javascript
let dt = date.getTime(); // => Saa Munani n'iminota 48 n'amasegonda 00
```

### getMinute(date)

- return minutes **(01 a 59)**

```javascript
let dt = date.getMinute(); // => 48
```

### getFullMinute(date)

```javascript
let dt = date.getFullMinute(); // => iminota 48
```

### getSecond(date)

- returns seconds **(01 a 59)**

```javascript
let dt = date.getSecond(); // => 00
```

### getFullSecond(date)

```javascript
let dt = date.getFullSecond(); // => amasegonda 00
```

### getHourMinute(date)

```javascript
let dt = date.getHourMinute(); // => Saa Munani n'iminota 48
```

### getDateTime(date)

```javascript
let dt = date.getDateTime(); // => 24/07/2015 Saa Sita n'iminota 00 n'amasegonda 00
```

### getFullCityDate(date)

_asynchronous function_

```javascript
let cty = await date.getFullCityDate(); // =>  Kigali, 01 Ukuboza, 2019
```

### getFullShortCountryDate(date)

_asynchronous function_

```javascript
let dt = await date.getFullShortCountryDate(); // =>  RW, 01 Ukuboza 2019
```

## Current Locale Functions

All functions bellow are _asynchronous_ and returns current locale informations.

### getCity()

_asynchronous function_

```javascript
let dt = await date.getCity(); // => Kigali
```

### getRegion()

_asynchronous function_

```javascript
let dt = await date.getRegion(); // => Kigali
```

### getCountry()

_asynchronous function_

```javascript
let dt = await date.getCountry(); // => Rwanda
```

### getShortCountry()

_asynchronous function_

```javascript
let dt = await date.getShortCountry(); // => RW
```

### getTimezone()

_asynchronous function_

```javascript
let dt = await date.getTimezone(); // => Africa/Kigali
```

## License

MIT License

Copyright (c) 2019 Igwaneza Bruce

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
