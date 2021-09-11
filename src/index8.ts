// contextual typing
function doAfter(ms, callback: (value: boolean) => void) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            callback(true);
        } else {
            callback(false);
        }
    }, ms);
}

//------ Right: value is boolean
doAfter(1000, (value) => {
    console.log(value);
});

//----- Wrong: value is any
const cb = (value) => {
    console.log(value);
}

doAfter(200, cb);