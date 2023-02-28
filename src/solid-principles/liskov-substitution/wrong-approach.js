class Rectangle {
    /**
     * @param {number} width 
     * @param {number} heigth 
     */
    constructor(width, heigth) {
        this._width = width;
        this._heigth = heigth;
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
     * @returns {string}
     */
    toString() {
        return `${this._width} x ${this._heigth}`;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
    /**
     * @param {number} value
     */    
    set size(value) {
        this._heigth = value;
        this._width = value;
    }
    /**
     * @returns {number}
     */
    get heigth() {
        return super.heigth;
    }
    /**
     * @param {number} value
     */
    set heigth(value) {
        this.size = value;
    }
    /**
     * @returns {number}
     */
    get width() {
        return super.width;
    }
    /**
     * @param {number} value
     */
    set width(value) {
        this.size = value;
    }
}

export {
    Rectangle,
    Square
};
