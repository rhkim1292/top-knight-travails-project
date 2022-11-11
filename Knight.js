import Node from './Node.js';
import Board from './Board.js';

class Knight {
  constructor(locNode) {
    this.locNode = locNode;
    this.moves = [
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
      [-2, 1],
    ];
  }

  // buildNextMoveTree is a method that builds out all the nodes that represent
  // the knight's possible next moves.
  buildNextMoveTree(board) {
    for (let i = 0; i < this.moves.length; i++) {
      // Get the coordinates of the knight's next location for this specific move.
      const nextLocArr = this.moves[i].map((item, idx) => {
        return this.locNode.loc[idx] + item;
      });
      if (
        nextLocArr[0] < board.lowerLimit ||
        nextLocArr[0] > board.upperLimit ||
        nextLocArr[1] < board.lowerLimit ||
        nextLocArr[1] > board.upperLimit
      ) {
        this.locNode.children[i] = null;
      } else {
        this.locNode.children[i] = new Node(nextLocArr);
      }
    }
  }
}

export default Knight;