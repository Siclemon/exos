import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = createInterface({input,output});
    const tab = tableauAleatoire();

    console.log(tab);

    for (let i = 0; i < tab.length; i++) {
        let indiceMin = i;

        for (let j = i; j < tab.length; j++) {
            if (tab[j] < tab[indiceMin]) {
                indiceMin = j;
            }
        }
        if (indiceMin > i) {
            const temp = tab[i];
            tab[i] = tab[indiceMin];
            tab[indiceMin] = temp;
        }
    }

    console.log(tab);

    rl.close();
}

function tableauAleatoire() {
    const ret = [];
    for (let i = 0; i < 1692; i++) {
        ret.push(randomInt(1,1000000));
    }
    return ret;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

await main();