import Node from './Node.js';
import Knight from './Knight.js';
import Board from './Board.js';

function knightMoves(start, end) {
    const board = new Board();
    const knight = new Knight(new Node(start));
    const Q = [];
    let destNode = null;

    Q.push(knight.locNode);
    while (Q.length > 0) {
        const visited = Q.shift();
        knight.locNode = visited;
        knight.buildNextMoveTree(board);
        if (visited.loc[0] === end[0] && visited.loc[1] === end[1]) {
            destNode = visited;
            break;
        }
        for (let i = 0; i < visited.children.length; i++) {
            if (visited.children[i]) Q.push(visited.children[i]);
        }
    }

    let curr = knight.locNode;
    let moveCount = -1;
    const path = [];

    while (curr) {
        path.push(curr.loc);
        moveCount++;
        curr = curr.prev;
    }

    console.log(`=> You made it in ${moveCount} moves! Here's your path:`);
    
    while (path.length > 0) {
        console.log(path.pop());
    }
}

knightMoves([3, 3], [7, 7]);