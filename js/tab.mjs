import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = createInterface({input,output});

    let tab = fillArray();
    tab.sort((a, b) => a - b);
    //tab = tab.filter(removeDupes);

    const n = parseInt(await rl.question(`Nombre à chercher\n > `));
    console.log();

    if (tab.includes(n))
        tab.forEach((x, i) => {
            if (x === n) {
                console.log(`${n} est présent à la position ${i + 1} du tableau.`);
            }
        });
    else
        console.log(`404 Not found`);

    rl.close();
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeDupes(n, i, t) {
    return n != t[i+1];
}

function fillArray() {
    const tab = [];
    for (let i = 0; i < 16922080; i++) {
        tab.push(randomInt(-1000000, 1000000));
    }
    return tab;
}

await main();

    // let res;
    // tab.find((x, i) => {if (x === n) res = i});
    // console.log(res);