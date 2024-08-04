// @ts-check

/**
 * @param {number} width
 * @param {number} height
 */
export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

/**
 * @param {number} width
 * @param {number} height
 */
Size.prototype.resize = function (width, height) {
    this.width = width;
    this.height = height;
}

/**
 * @param {number} x 
 * @param {number} y 
 */
export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

/**
 * @param {number} x
 * @param {number} y
 */
Position.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    /**
     * @param {Size} size 
     */
    resize(size) {
        let width = Math.min(Math.max(size.width, 1), this.screenSize.width - this.position.x);
        let height = Math.min(Math.max(size.height, 1), this.screenSize.height - this.position.y);
        this.size.resize(width, height);
    }

    /**
     * @param {Position} position
     */
    move(position) {
        let x = Math.min(Math.max(position.x, 0), this.screenSize.width - this.size.width);
        let y = Math.min(Math.max(position.y, 0), this.screenSize.height - this.size.height);
        this.position.move(x, y);
    }
}

/**
 * @param {ProgramWindow} programWindow
 * @returns {ProgramWindow}
 */
export function changeWindow(programWindow) {
    programWindow.move(new Position());
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}