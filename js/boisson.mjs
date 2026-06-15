import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

let stockGobelets = Math.floor(Math.random()*10);
let stockTouillettes = Math.floor(Math.random()*10);
const   italique = "\x1b[3m",
        reset = "\x1b[m";

async function main() {
    const sc = createInterface({input,output});
    const prix = 1.5;
    let sommeIntroduite = 0;

    if (stockGobelets <= 0) {
        console.log("ERREUR : Plus de gobelets.")
    } else {
        choixBoisson();
        while (sommeIntroduite < prix) {
            sommeIntroduite += parseFloat(await sc.question("Veuillez insérez de la monnaie\n > "));
        }
        if (sommeIntroduite > prix) {
            renduMonnaie(prix, sommeIntroduite);
        }
        console.log("");
        distribuerGobelet();
        distribuerBoisson();
        if (stockTouillettes > 0)
            if ((await sc.question("Voulez-vous une touillette ?\n > ")) == "oui")
                distribuerTouillette();
        console.log("\nAu revoir !");
    }

    sc.close();
}

function choixBoisson() {
    console.log("Veuillez choisir votre boisson")
}

function renduMonnaie(prix, monnaie) {
    console.log((monnaie - prix) + "€ rendus.");
}

function distribuerGobelet() {
    console.log("Gobelet distribué");
    stockGobelets--;
}

function distribuerBoisson() {
    console.log(italique + "Glouglouglou" + reset);
}

function distribuerTouillette() {
    console.log(italique + "Plouf" + reset);
    stockTouillettes--;
}

await main();