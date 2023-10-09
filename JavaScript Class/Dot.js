// JavaScript Comment Snippet

/**
 * @class Dot
 * @property {number} Dot.x - coordinate of x
 * @property {number} Dot.y - coordinate of y
 *
 *
 * @author Mino
 */
export class Dot {
  /** @type {number} dot.x - coordinate of x */
  x;

  /** @type {number} dot.y - coordinate of y */
  y;

  /** @type {Dot[]} #near - 私有 List of `Dot`  */
  #near = [];

  /** @type {string} Dot.DESCRIPTION - description */
  static DESCRIPTION = "DOT";

  /** @constructor initial dot coordinate */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {Dot} dot
   * @return {undefined} no return
   * @desc append a dot into **#near**
   */
  #appendNear(dot) {
    this.x = 1;
    this.#near.push(dot);

    return 0..__;
  }
}
