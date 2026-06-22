import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = createInterface({ input, output });

    const mot = await saisieMot(rl);
    console.clear();

    let lettresTrouvees = 2;
    const trouvee = [true];
    const lettresTestees = [];
    let vies = 6;

    for (let i = 0; i < mot.length - 2; i++)
        trouvee.push(false);
    trouvee.push(true);

    do {
        let motAffiche = '';
        for (let i = 0; i < mot.length; i++) {
            if (trouvee[i])
                motAffiche += mot[i];
            else
                motAffiche += '-';
        }
        console.log(motAffiche);

        for (let i = 0; i < vies; i++)
            rl.write(" ❤️ ");
        rl.write("\n\n");

        const lettre = await rl.question('Lettre ?\n > ');

        if (lettresTestees.includes(lettre)) {
            console.log('Lettre déjà testée nullos ╰（‵□′）╯')
        } else {
            lettresTestees.push(lettre)
            if (mot.includes(lettre)) {
                for (let i = 1; i < mot.length - 1; i++) {
                    if (lettre === mot[i]) {
                        trouvee[i] = true;
                        lettresTrouvees++;
                    }
                }
            } else 
                vies--;
        }
        console.log()

    } while (lettresTrouvees < mot.length && vies > 0);

    if (vies > 0) 
        console.log(`Gagné !! Le mot était bien ${mot}`)
    else 
        console.log(`perdu 🫵 😂\nle mot était ${mot} `)



    rl.close();
}

async function saisieMot(rl) {

    while (true) {
        const mot = await rl.question('Quel est le mot à deviner ?\n > ');
        if (mot.length >= 5)
            return mot;
        console.log('Au moins 5 lettres stp (✿ ◠ ‿◠)')
    }

}

await main();