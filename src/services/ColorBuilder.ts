import Color from '@/domains/Color';

export default class ColorBuilder {
  /**
   * 16進数カラーコードから, Color インスタンスを作成するメソッド
   * @param hex '#000000'形式, および'000000'形式で表現されたカラーコード。省略形はng。
   */
  static build(hex: string): Color {
    const trimedColorHex = hex.replace(/^#/, '');
    const splitHexList = trimedColorHex.match(/.{2}/g);
    if (splitHexList === null) {
      throw new Error('Length of the Hex String is must 6');
    }
    const red = parseInt(splitHexList[0], 16);
    const green = parseInt(splitHexList[1], 16);
    const blue = parseInt(splitHexList[2], 16);
    return new Color(red, green, blue);
  }
}
