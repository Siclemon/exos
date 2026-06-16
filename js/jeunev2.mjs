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

    const categories = calcul(ages);


    console.log(ages);

    if (categories.moinsDeVingt === 20)
        console.log('TOUTES LES PERSONNES ONT MOINS DE 20 ANS')
    else if (categories.plusDeVingt === 20)
        console.log('TOUTES LES PERSONNES ONT PLUS DE 20 ANS')
    else
        console.log(categories);


    rl.close();
}

function calcul(ages) {
    const res = {
        moinsDeVingt: 0,
        vingt: 0,
        plusDeVingt: 0,
    };

    ages.forEach(age => {
        if (age < 20) res.moinsDeVingt++;
        if (age === 20) res.vingt++;
        if (age > 20) res.plusDeVingt++;
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