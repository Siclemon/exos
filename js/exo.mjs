import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

// async function reponse(sc) {
//     let caca = '';
//     do {
//         caca = await sc.question('fezqs');
//         caca = caca.toUpperCase().trim();
//     } while (caca != 'OUI');
//     return caca == 'OUI';
// }

async function main() {
    const sc = createInterface({ input, output });
    let res = await sc.question("Est-ce qu'il fera beau demain ?\n> ");
    let fin = "velo";

    //if (reponse(sc)) console.log('caca');

    if (res == "oui") {
        res = await sc.question("\nEst-ce que ma bicyclette est en bon état ?\n> ");
        if (res != "oui") {
            console.log("\nJe vais chez le garagiste.");
            res = await sc.question(
                "Est-ce que ma bicyclette est immédiatement réparable ?\n> ",
            );
            if (res != "oui") {
                fin = "etang";
            }
        }
    } else {
        fin = "got";
        res = await sc.question(
            "\nEst-ce que je trouve le 1er tome de Game of Thrones ?\n> ",
        );
        if (res == "oui") {
        } else {
            console.log("\nJe vais à la bibliothèque.");
            res = await sc.question(
                "Est-ce que le 1er tome de Game of Thrones est disponible ?\n> ",
            );
            if (res == "oui") {
                console.log("\nJ'emprunte le 1er tome de Game of Thrones.");
            } else {
                fin = "pol";
                console.log("\nJ'emprunte un roman policier.");
            }
            console.log("Je rentre chez moi.");
        }
    }

    console.log("\n");

    switch (fin) {
        case "velo":
            console.log("Je vais faire une balade à bicyclette.");
            break;

        case "etang":
            console.log("Je vais cueillir les joncs à l'étang.");
            break;

        case "got":
            console.log(
                "Je m'installe confortablement dans un fauteuil et lis le 1er tome de Game of Thrones.",
            );
            break;

        case "pol":
            console.log(
                "Je m'installe confortablement dans un fauteuil et lis un roman policier.",
            );
            break;

        default:
            break;
    }

    sc.close();
}

await main();
