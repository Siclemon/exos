import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = createInterface({input,output});
    const ages = [];

    switch (await rl.question('remplir à la main ? (o pour oui)\n > ')) {
        case 'o':
            await saisieValeurs(rl, ages);
            break;
        default:
            remplissementAleatoire(ages);
    }

    const moinsDeVingt = calcul(ages);


    console.log(ages);
    console.log(moinsDeVingt);

    rl.close();
}

function calcul(ages) {
    let res = 0;
    ages.forEach(age => {
        if (age < 20) res++;
    });
    return res;
}

async function saisieValeurs(rl, ages) {
    for (let i = 0; i < 20; i++) {
        ages.push(parseInt(await rl.question(`âge n° ${i + 1} : `)));
    }
}

function remplissementAleatoire(ages) {
    for (let i = 0; i < 20; i++) {
        ages.push(randomInt(1,60));
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

await main();