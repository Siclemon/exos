function hanoi(towers) {
    const res = move(towers, 0, 0, 2);
    display(res);
    return res;
}

/**
 * Moves the target disk to the specified tower.
 * @param {array} towers - towers 👍
 * @param {int} tower - index of target's current tower.
 * @param {int} rank - index if target's current rank in its tower.
 * @param {int} goal - index of the tower where the target should go.
 * @returns {array} towers 
 */
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

    const value = towers[tower][rank];
    //bouge
    towers[goal].push(value);
    towers[tower].pop();
    tower = goal;
    //appel enfant
    if (value > 1) {
        const child = findChild(towers, value);
        move(towers, child.tower, child.rank, tower);
    }

    return towers
}

/**
 * Returns the position of the caller's inferior disk.
 * @param {array} towers - yup
 * @param {int} parentValue - The value of the caller.
 * @returns {object} Position: { tower, rank }
 */
function findChild(towers, parentValue) {
    const childValue = parentValue - 1;
    for (let t = 0; t < towers.length; t++) {
        for (let r = 0; r < towers[t].length; r++) {
            if (towers[t][r] === childValue)
                return { tower: t, rank: r };
        }
    }
}

function displayy(towers) {
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

function display(towers) {
    const disks = Math.max(...towers.flat());
    const maxWidth = disks * 2 + 1;
    const firstLine = `\x1b[33m${count}\x1b[m` + (count >= 10 ? '' : '─') + (count++ >= 100 ? '' : '─') + '─'.repeat(maxWidth - 2) + '┬' + '─'.repeat(maxWidth) + '┬' + '─'.repeat(maxWidth) + '╮';
    console.log(firstLine)
    for (let i = disks; i >= 0; i--) {
        let line = '│';
        for (let j = 0; j < towers.length; j++) {
            const value = towers[j][i] ?? 0;
            const width = value > 0 ? value * 2 + 1 : 1;
            const padding = (maxWidth - width) / 2;
            const char = width > 1 ? '▄' : ' ';
            line += ' '.repeat(padding) + colors[value] + char.repeat(width) + '\x1b[m' + ' '.repeat(padding) + '│';
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
    generateColors();
    const hanoiedTowers = hanoi(towers);
}

const colors = [];
let count = 0;
main();

function generateColors() {
    for (let i = 0; i < 20; i++) {
        const rgb = [];
        for (let j = 0; j < 3; j++) {
            rgb.push(randomInt(70,255));
        }
        colors.push(`\x1b[38;2;${rgb[0]};${rgb[1]};${rgb[2]}m`)
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}