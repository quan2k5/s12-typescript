"use strict";
var weekDays;
(function (weekDays) {
    weekDays["Monday"] = "monday";
    weekDays["Tuesday"] = "tuesday";
    weekDays["Wendesday"] = "wendesday";
    weekDays["Thirsday"] = "thirsday";
    weekDays["Friday"] = "friday";
    weekDays["Saturday"] = "saturday";
    weekDays["Sunday"] = "sunday";
})(weekDays || (weekDays = {}));
for (let key in weekDays) {
    console.log(weekDays[key]);
}
