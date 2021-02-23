/* 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    if(a.length === b.length){
        let arrayLength = a.length; 
        let resultCompareScore = [0, 0];
        for(let ctrl = 0; ctrl < arrayLength; ctrl++){
            if(a[ctrl] > b[ctrl]){
                resultCompareScore[0] += 1;
            }else if(a[ctrl] < b[ctrl]){
                resultCompareScore[1] += 1;
            }else{
                continue;
            }
        }
        return resultCompareScore;
    }


    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    let sumArrayElements = 0;
    for(let ctrl = 0; ctrl < ar.Length; ctrl++){
        sumArrayElements += ar[ctrl];
    }
    return sumArrayElements;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = aVeryBigSum(ar);

    ws.write(result + "\n");

    ws.end();
}
