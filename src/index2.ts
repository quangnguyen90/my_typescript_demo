import * as Mailer from './mailer';

// ---- Assign Type in TypeScript

const age: number = 1;

let newVar: string;

let oldVar: any;

function sum (a: number, b: number): number {
    return a + b;
}

const multiply = (a: number, b:number): number => a * b;

const sendEmail = async ({email, subject, content}: {
    email: string;
    subject: string;
    content: string;
}):Promise<boolean> => {
    const res = await Mailer.send(email, subject, content);
    return res;
}

function waitAndDo(callback: (params: string) => void) {
    setTimeout(() => {
        callback('Oops');
    }, 1000)
}

class Dog {
    sayHi(name: string) {
        console.log('Gau Gau', name);
    }
}