"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quote = void 0;
function getCurrentDateTime() {
    var currentDate = new Date();
    var hours = String(currentDate.getHours()).padStart(2, '0');
    var minutes = String(currentDate.getMinutes()).padStart(2, '0');
    var day = String(currentDate.getDate()).padStart(2, '0');
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var year = String(currentDate.getFullYear());
    return "".concat(hours, ":").concat(minutes, " ").concat(day, "/").concat(month, "/").concat(year);
}
console.log(getCurrentDateTime());
var quote = /** @class */ (function () {
    function quote() {
    }
    quote.run = function (text, person, context) {
        return " \"" + text + "\" -" + person + " " + getCurrentDateTime() + " (Context: " + context + ")";
    };
    return quote;
}());
exports.quote = quote;
