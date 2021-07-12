// 色のRGB値は0~255で考える
export default class Color {
  _r = 0;
  set R(value) {
    if (value <= 255) {
      this._r = value;
    }
  }
  get R() {
    return this._r;
  }
  get sR() {
    return this._r / 255;
  }

  _g = 0;
  set G(value) {
    if (value <= 255) {
      this._g = value;
    }
  }
  get G() {
    return this._g;
  }
  get sG() {
    return this._g / 255;
  }

  _b = 0;
  set B(value) {
    if (value <= 255) {
      this._b = value;
    }
  }
  get B() {
    return this._b;
  }
  get sB() {
    return this._b / 255;
  }

  /**
   * constructor
   * @param r 赤の0~255
   * @param g 青の0~255
   * @param b 緑の0~255
   */
  constructor(r: number, g: number, b: number) {
    this.R = r;
    this.G = g;
    this.B = b;
  }
}
