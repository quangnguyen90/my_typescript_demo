// type inference
function foo() {
    // before: let i; --> line 127: not suggest function toUpperCase()
    // after: let i: string --> line 127: auto suggest function toUpperCase()
    let i: string;

    if (Math.random() > 0.5) {
        i = '5';
    } else {
        i = '10';
    }

    i.toUpperCase();
}