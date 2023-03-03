import { PointFactory } from './point-factory';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static get factory() {
        return new PointFactory();
    }
}

export {
    Point
};
