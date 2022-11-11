class Board {
    constructor(dimension = 8) {
        this.boardArr = Array.from({ length: dimension }, (e, idxY) => Array.from({ length: dimension}, (e, idxX) => [idxX, idxY]));
        this.lowerLimit = 0;
        this.upperLimit = dimension - 1;
    }
}

export default Board;