class Quadrilateral {
    /**
     * @param {number} width 
     * @param {number | undefined} heigth
     */
    constructor(width, heigth) {
        this._width = width;
        this._heigth = heigth || width;
    }
    /**
     * @returns {number}
     */
    get area() {
        return this._width * this._heigth;
    }
    /**
     * @returns {number}
     */
    get heigth() {
        return this._heigth;
    }
    /**
     * @param {number} value
     */
    set heigth(value) {
        this._heigth = value;
    }
    /**
     * @returns {number}
     */
    get width() {
        return this._width;
    }
    /**
     * @param {number} value
     */
    set width(value) {
        this._width = value;
    }
    /**
     * @returns {boolean}
     */
    isSquare() {
        return this._heigth === this._width;
    }
    /**
     * @returns {string}
     */
    toString() {
        return `${this._width} x ${this._heigth}`;
    }
}

export {
    Quadrilateral
};
