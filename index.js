import { start } from "repl";

function map(array, callback) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function reduce(arr, callback, startPoint) {
    let runningTotal;
    let i;
    if (startPoint) {
        runningTotal = startPoint;
        i = 0;
    } else {
        runningTotal = arr[0];
        i = 1;
    }

    for (i; i < arr.length; i++) {
        runningTotal = callback(arr[i], runningTotal);
    }
    return runningTotal;
}
