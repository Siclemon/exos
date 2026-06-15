import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';


async function main() {
    const sc = createInterface({input,output});
    const nb = parseInt(await sc.question("Combien de nombres parfaits voulez-vous chercher ?\n > "));
    let somme = 0;
    let parfaits = 0;

    for (let j = 2; j < Infinity; j++) {

        somme = 0;

        //somme des diviseurs
        for (let i = 1; i < j / 2 + 1; i++) {
            if (j % i == 0) {
                somme += i;
            }
        }

        //parfait oui
        if (somme == j) {
            console.log(j);
            parfaits++;
        }

        //recherche finie
        if (parfaits == nb)
            break;

    }

    sc.close();
}

await main();