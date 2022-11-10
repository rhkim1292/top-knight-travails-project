class Node {
    constructor(loc = [0, 0]) {
        this.loc = loc;
        this.u2l1 = null;
        this.u2r1 = null;
        this.u1r2 = null;
        this.d1r2 = null;
        this.d2l1 = null;
        this.d1l2 = null;
        this.u1l2 = null;
    }
}

export default Node;