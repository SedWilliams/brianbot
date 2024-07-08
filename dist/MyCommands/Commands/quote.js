"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quote = void 0;
function getCurrentDateTime() {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear());
    return `${hours}:${minutes} ${day}/${month}/${year}`;
}
console.log(getCurrentDateTime());
class quote {
    static run(text, person, context) {
        return " \"" + text + "\" -" + person + " " + getCurrentDateTime() + " (Context: " + context + ")";
    }
}
exports.quote = quote;
