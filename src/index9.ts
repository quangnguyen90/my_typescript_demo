// union type
function isWeekend(date: Date | string | number): boolean {
    if (typeof date === 'string' || typeof date === 'number') {
        date = new Date(date);
    }
    const day = date.getDay();
    return day === 6 || day === 0; 
}

console.log(isWeekend(new Date())); // true
console.log(isWeekend('2021-10-09T14:48:00.000Z')); // false
console.log(isWeekend(new Date().getTime())); // true
