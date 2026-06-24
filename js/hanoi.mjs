function hanoi(towers) {
    const res = move(towers, 0, 0, 2);
    display(res);
    return res;
}

function move(towers, tower, rank, goal) {
    //bloqué
    if (towers[tower][rank + 1]) {
        const goulag = 3 - tower - goal;
        //va là où je veux pas aller
        move(towers, tower, rank + 1, goulag);
    }
    //affichage
    display(towers);
    //pas bloqué
    if (towers[tower][rank + 1] == undefined) {
        const value = towers[tower][rank];
        //bouge
        towers[goal].push(value);
        towers[tower].pop();
        //appel enfant
        if (value > 1) {
            const child = findChild(towers, value);
            move(towers, child.tower, child.rank, goal); //ici goal est la tour actuelle
        }
    }
    return towers
}

function findChild(towers, parentValue) {
    const childValue = parentValue - 1;
    for (let t = 0; t < towers.length; t++) {
        for (let r = 0; r < towers[t].length; r++) {
            if (towers[t][r] === childValue)
                return { tower: t, rank: r };
        }
    }
}

function display(towers) {
    const max = Math.max(...towers.flat()) - 1;
    const firstLine = `\x1b[33m${count++}\x1b[m` + (count >= 10 ? '' : '─') + (count >= 100 ? '' : '─') + '─┬───┬───╮';
    console.log(firstLine)
    for (let i = max; i >= 0; i--) {
        let line = '│';
        for (let j = 0; j < towers.length; j++) {
            line += ' ' + (towers[j][i] ?? ' ') + ' │';
        }
        console.log(line);
    }
    console.log(`┕━━━┷━━━┷━━━┙`)
}

function displayy(towers) {
    const disks = Math.max(...towers.flat());
    const maxWidth = disks * 2 + 1;

    const firstLine = `\x1b[33m${count++}\x1b[m` + (count >= 10 ? '' : '─') + (count >= 100 ? '' : '─') + '─'.repeat(maxWidth - 2) + '┬' + '─'.repeat(maxWidth) + '┬' + '─'.repeat(maxWidth) + '╮';
    console.log(firstLine)
    for (let i = disks; i >= 0; i--) {
        let line = '│';
        for (let j = 0; j < towers.length; j++) {
            const value = towers[j][i] ?? 0;
            const width = value > 0 ? value * 2 + 1 : 1;
            const padding = (maxWidth - width) / 2;
            const char = width > 1 ? '▄' : ' ';
            line += ' '.repeat(padding) + char.repeat(width) + ' '.repeat(padding) + '│';
        }
        console.log(line);
    }
    console.log('┕' + '━'.repeat(maxWidth) + '┷' + '━'.repeat(maxWidth) + '┷' + '━'.repeat(maxWidth) + '┙')
    console.log();
}

function towersInit(disksAmount) {
    const towerOne = [];
    const towerTwo = [];
    const towerThree = [];

    for (let i = disksAmount; i > 0; i--) {
        towerOne.push(i);
    }
    return [towerOne, towerTwo, towerThree];
}

function main() {
    const towers = towersInit(5);
    const hanoiedTowers = hanoi(towers);
}

let count = 0;
main();