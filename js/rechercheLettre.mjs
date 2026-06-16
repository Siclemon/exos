import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = createInterface({input,output});

    const chaine = 'Pokem ipsum dolor sit amet Snorunt Goldeen Poochyena Serperior deserunt mollit Throh. Lorem ipsum dolor sit amet Steelix Electrode Seadra Sapphire Marowak Bidoof. Ivysaur Solosis Donphan et dolore magna aliqua Drapion lorem ipsum dolor sit amet Pidove. Earth Badge Tornadus Suicune Sudowoodo Krokorok Maractus Farfetch\'d. Kanto Blue Latias Giratina Castform Satoshi Tajiri Rotom. Team Rocket Nosepass Body Slam Yamask Rayquaza Blue Poochyena. Dig Junichi Masuda Rare Candy Liepard Rotom Technical Machine Skarmory. Thunder Badge Ditto Mr. Mime Gliscor Kanto Rhyperior Sealeo. Vermilion City Shieldon Sawk Exploud Ninjask Maractus Armaldo. Wartortle Latios Strength Aipom Shroomish Flygon Munna.';
    const chaineVide = '.';
    const chaineVraimentVide = '';
    let compteur = 0;
    const lettre = (await rl.question(`Lettre à chercher\n > `)).toLowerCase();;

    console.log();

    if (chaineEstVide(chaine)) {
        console.log('La chaine est vide');
    }
    else {
        for(let i = 0; i < chaine.length; i++) {
            if (chaine[i].toLowerCase() === lettre) compteur++;
        }

        if (compteur > 0)
            console.log(`La lettre ${lettre} est présente ${compteur} fois.`);
        else
            console.log(`La lettre ${lettre} n'est pas présente.`)
    }

    rl.close();
}

function chaineEstVide(chaine) {
    if (chaine.length === 0 || chaine === '.')
        return true
}

await main();
