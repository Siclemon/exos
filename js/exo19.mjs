import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';


async function main() {
    const sc = createInterface({input,output});
    const nb = parseInt(await sc.question("Nombre entier :\n > "));

    for (let i = 2; i < nb / 2 + 1; i++) {
        if (nb % i == 0) {
            console.log(i)
        }
    }

    sc.close();
}

await main();