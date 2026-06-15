import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = createInterface({input,output});

    const temperature = await entree(rl);
    const result = conversion(temperature);

    console.log(`\n${temperature[0].toFixed(2)} degrés ${temperature[1] == 'C' ? 'Celsius' : 'Fahrenheit'} valent ${result[0].toFixed(2)} degrés ${result[1] == 'C' ? 'Celsius' : 'Fahrenheit'}`)

    rl.close();
}

async function entree(rl) {
    let n, ret;
    do {
        n = await rl.question(`Veuillez entrer une température : "x C/F" \x1b[3m(-459.67 < x < 5 000 000)\x1b[m\n > `);
        ret = n.split(" ");
        ret.push("");
        ret = [parseFloat(ret[0]),ret[1].toUpperCase()];
    } while (!(ret[0] < 5000000 && (ret[0] > -459.69 && ret[1] == 'F') || (ret[0] > -273.15 && ret[1] == 'C')))
        return [ret[0],ret[1]];
}

function conversion(a) {
    if (a[1] == 'C') 
        return [a[0] * 9 / 5 + 32, 'F'];
    else
        return [(a[0] - 32) * 5 / 9, 'C'];
    //return a[1] == 'C' ? a[0] * 9 / 5 + 32 : (a[0] - 32) * 5 / 9; //pas super lisible
}

await main();