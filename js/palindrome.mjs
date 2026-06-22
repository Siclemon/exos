import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = createInterface({ input, output });

    const phrase = (await rl.question('Phrase ?\n > ')).toLowerCase().replaceAll(' ','').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const palindrome = phrase.split('').every((l, i, arr) => l === arr[arr.length - i - 1])

    if (palindrome)
        console.log(`\x1b[38;2;0;255;0mc'est un palindrome!! youpi!!!\x1b[m`)
    else
        console.log(`\x1b[38;2;255;0;0mc'est pas un palindrome :(\x1b[m`)

    rl.close();
}

await main();