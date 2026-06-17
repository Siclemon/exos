import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = createInterface({input,output});

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const compteurs = {};
    const texte = await saisieTexte(rl);

    console.log();

    for(let i = 0; i < alphabet.length; i++) {
        compteurs[alphabet[i]] = 0;
    }

    for(let i = 0; i < texte.length; i++) {
        for(let j = 0; j < alphabet.length; j++) {
            if (texte[i].toLowerCase() === alphabet[j]) compteurs[alphabet[j]]++;
        }
    }

    console.log(compteurs);

    rl.close();
}

async function saisieTexte(rl) {
    let texte;

    do {
        texte = await rl.question('Texte :\n > ');
    } while (texte.length < 120)
    texte = texte .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return texte
}

await main();
