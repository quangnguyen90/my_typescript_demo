// union type
// type alias
type MixedDate = Date | string | number;

function isWeekend(date: MixedDate): boolean {
    if (typeof date === 'string' || typeof date === 'number') {
        date = new Date(date);
    }
    const day = date.getDay();
    return day === 6 || day === 0; 
}

function isLastDayOfMonth(date: MixedDate): boolean {
    return false;
}

console.log(isWeekend(new Date())); // true
console.log(isWeekend('2021-10-09T14:48:00.000Z')); // false
console.log(isWeekend(new Date().getTime())); // true
