class Node {
    constructor(loc = [0, 0]) {
        this.loc = loc;
        this.prev = null;
        // The children array of a Node will contain 8 other nodes that
        // represent the 8 different locations that is the result of each
        // possible move the knight can take.
        this.children = [];
        for (let i = 0; i < 8; i++) {
            this.children.push(null);
        }
    }
}

export default Node;