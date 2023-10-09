/**
 * @class Dot
 * @property {number} Dot.x - coordinate of x
 * @property {number} Dot.y - coordinate of y
 *
 * @author Mino
 */
export class Dot {
  /** @type {number} dot.x - coordinate of x */
  x;

  /** @type {number} dot.y - coordinate of y */
  y;

  /** @type {Set<Dot>} #near - 私有 Set of `Dot`  */
  #near = new Set();

  /** @type {string} Dot.DESCRIPTION - description */
  static #DESCRIPTION = "Dot Static Variable.";

  /** @constructor initial dot coordinate */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  get near() {
    const list = [];
    const iterator = this.#near.values();
    while (true) {
      const result = iterator.next();
      if (result.done) break;
      list.push(result.value);
    }
    return list;
  }

  /**
   * @param {Dot} dot
   * @return {Dot} return this
   * @desc append a dot into **#near**
   */
  append(dot) {
    this.#near.add(dot);
    return this;
  }

  remove(dot) {
    this.#near.delete(dot);
    return this;
  }

  /**
   * @param {HTMLDivElement} container dot container
   * @param {Dot} dot dot
   */
  static createDom(container, dot) {
    const ele = document.createElement("div");
    ele.classList.add("dot");
    ele.style = `left: ${dot.x}px; top: ${dot.y}px;`;
    container.append(ele);
  }
}
