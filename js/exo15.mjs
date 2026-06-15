import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const sc = createInterface({input,output});
    const s = parseFloat(await sc.question("Somme initiale :\n > "));
    const i = parseFloat(await sc.question("Intérêt :\n > "));
    const n = parseInt(await sc.question("Nombre d'années :\n > "));

    const simple = s * ( 1 + n * i);
    const compose  = s * (1 + i) ** n;

    console.log("simple : " + simple);
    console.log("composé : " + compose);

    sc.close();
}

await main();