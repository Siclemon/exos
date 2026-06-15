import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';


async function main() {
    const sc = createInterface({input,output});
    const nb = parseInt(await sc.question("Nombre entier :\n > "));
    let premier = true;

    for (let i = 2; i <= Math.sqrt(nb); i++) {
        if (nb % i == 0) {
            premier= false;
            break;
        }
    }

    if (premier)
        console.log(nb + " est un nombre premier");
    else
        console.log(nb + " n'est pas un nombre premier");

    sc.close();
}

await main();