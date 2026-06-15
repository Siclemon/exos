import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const sc = createInterface({input,output});
    const dex = ['Bulbizarre','Herbizarre','Florizarre','Salamèche','Reptincel','Dracaufeu','Carapuce','Carabaffe','Tortank'];
    let score = 0;
    let guesses = 0;
    let number;
    let guess;

    while (true) {
        number = getRandomInt(9);
        guess = await sc.question(dex[number] + '\n > ');

        if (guess.toUpperCase().localeCompare('STOP') == 0)
            break;

        guesses++;
        if (guess == number + 1) {
            score++;
            console.log('[\x1b[38;2;20;200;20m' + score + '\x1b[m' + '/' + guesses + ']');
        }
        else {
            console.log('[\x1b[38;2;200;20;20m' + score + '\x1b[m' + '/' + guesses + '] - la réponse était \x1b[3m' + (number + 1) + '\x1b[m');
        }
        
        console.log('');
    }

    console.log('\nScore final : ' + '[\x1b[38;2;70;170;230m' + score + '\x1b[m' + '/' + guesses + ']\n');
    sc.close();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

await main();