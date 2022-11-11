import Node from './Node.js';
import Knight from './Knight.js';
import Board from './Board.js';

const board = new Board();
const knighttest = new Knight(new Node([0, 0]));
knighttest.buildNextMoveTree(board);
console.log('Knight Location: ' + knighttest.locNode.loc);
console.log('Knight Next Moves:' );
console.log(knighttest.locNode.children);