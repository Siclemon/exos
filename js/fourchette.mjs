import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = createInterface({input,output});
    const nombre = randomInt(0, 100);
    let min = 0;
    let max = 100;
    let tentatives = 0;

    while (true) {
        const rep = parseInt(await rl.question(`La fourchette est de ${min} à ${max}.\n > `));
        tentatives++;
        if (rep === nombre) {
            break;
        }
        else if (rep < nombre && rep > min) {
            min = rep;
        }
        else if (rep > nombre && rep < max) {
            max = rep;
        }
    }

    console.log(`trouvé ${nombre} en ${tentatives} essais, gg`)

    rl.close();
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

await main();