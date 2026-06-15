import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const sc = createInterface({input,output});
    const year = parseInt(await sc.question('\x1b[4mAnnée :\x1b[m '));
    let res;

    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
        res = 'L\'année ' + year + ' est bissextile.';
    else
        res = 'L\'année ' + year + ' n\'est pas bissextile.';

    console.log(res);
    sc.close();
}

await main();