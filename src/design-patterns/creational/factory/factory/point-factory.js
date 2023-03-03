import { Point } from './point';

class PointFactory {
    // not necessarily static
    newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
    }
}

export {
    PointFactory,
};
