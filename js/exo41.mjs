import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const sc = createInterface({input,output});


async function main() {
    const taux = parseFloat(await sc.question("Taux d'actualistaion :\n > "));
    const invest = parseFloat(await sc.question("Montant d'investissement de départ :\n > "));
    const annees = parseInt(await sc.question("Nombre d'années :\n > "));
    const valeurResiduelle = parseInt(await sc.question("Valeur résiduelle :\n > "));

    let valeurActuelleNette = await calcul(taux, invest, annees, valeurResiduelle);

    console.log(`Valeur actuelle nette : ${valeurActuelleNette}`);



    sc.close();
}

async function calcul(t, i, n, vr) {
    let van = -i;
    let flux = 0;
    for (let k = 1; k < n; k++) {
        flux = parseFloat(await sc.question(`Flux net (année ${k}) :\n > `));
        van += flux * ((1+t) ** (-k));
    }
    van += vr * ((1+t) ** (-5))
    return van;
}

await main();