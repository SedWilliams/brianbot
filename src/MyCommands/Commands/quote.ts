import { time } from "console"

function getCurrentDateTime(): string {
    const currentDate = new Date();

    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear());

    return `${hours}:${minutes} ${day}/${month}/${year}`;
}

console.log(getCurrentDateTime());

export class quote {
   
    
    public static run(text: String, person: String, context: String) {
        return " \"" + text + "\" -" + person + " " + getCurrentDateTime() + " (Context: " + context + ")"; 
    }
}