function hanoi(towers) {

    move(towers, 0, 0, 2);
    display(towers);

}

function move(towers, tower, rank, goal) {
    console.table(towers)
    console.log(`tower:${tower}\tgoal:${goal}\trank:${rank}`)

    if (towers[tower][rank + 1]) { //bloqué
        console.log('bloqué')
        const goulag = 3 - tower - goal;
        console.log(`tower:${tower}\tgoal:${goal}\trank:${rank}\tgoulag:${goulag}\t`)
        //va là où je veux pas aller
        move(towers, tower, rank + 1, goulag);
    }

    if (towers[tower][rank + 1] != undefined) { //pas bloqué
        console.log('pas bloqué')
        console.log(`tower:${tower}\tgoal:${goal}\trank:${rank}\t`)
        //bouge
        towers[goal].push(towers[tower][rank]);
        towers[tower].pop();
        //appel enfant
        if (findChild(towers, tower, rank)) {
            const childPosition = findChild(towers, tower, rank);
            console.log(childPosition)
            return move(towers, childPosition[0], childPosition[1], tower);
        }
    }

}

function findChild(towers, tower, rank) {
    const childValue = towers[tower][rank] - 1;
    if (childValue === 0)
        return false;
    for (let t = 0; t < towers.length; t++) {
        for (let r = 0; r < towers[t].length; r++) {
            if (towers[t][r] === childValue)
                return [t,r];
        }
    }
    return 'prout'
}

function display(towers) {
    console.table(towers);
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

    hanoi(towers);
}

main();