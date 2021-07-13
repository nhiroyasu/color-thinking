/**
 * 目的：文字色と背景色の組み合わせを'数学的?`に考える
 * 参考サイト:https://www.kanzaki.com/docs/html/color-check
 */

import Color from '@/domains/Color';

/**
 * 明るさの計算式 （(R * 299) + (G * 587) + (B * 114)) / 1000 で算出
 * @param {Color} color
 * @return {Number} 明るさ
 */
function brightness(color: Color): number {
  return (color.R * 299 + color.G * 587 + color.B * 114) / 1000;
}

/**
 * 2つのカラーの明るさの差を計算
 * @param {Color} c1
 * @param {Color} c2
 * @return {Number} 明るさの差(絶対値)
 */
function diffBrightness(c1: Color, c2: Color): number {
  return Math.abs(brightness(c1) - brightness(c2));
}

/**
 * 明るさの差が基準に準拠しているか
 * @param {Color} c1
 * @param {Color} c2
 * @return {Boolean} 明るさの差が125以上ならtrue
 */
function isDiffBrightnessFollowing(c1: Color, c2: Color): boolean {
  const ruleValue = 125;
  return diffBrightness(c1, c2) >= ruleValue;
}

/**
 * 輝度を算出 (R' * 0.2126 + G' * 0.7152 + B' * 0.0722)
 * R', G', B' は以下のように定義される
 * X' = sX <= 0.03928 ? sR / 12.92 : ((sR + 0.055) / 1.055) ^ 2.4
 * ただし、 sX = X / 255
 * X = [R', G', B']
 * ---
 * また
 * 輝度L1
 * 輝度L2
 * があり、
 * 全景と背景のうち輝度の大きい方の値がL1, 小さい方がL2となる
 * ---
 * @param {Color} color
 * @return {Number} 輝度
 */
function luminance(color: Color) {
  let computeColorDash = function(sX: number) {
    return sX <= 0.03928 ? sX / 12.92 : Math.pow(sX + 0.055, 2.4);
  };
  const rDash = computeColorDash(color.sR);
  const gDash = computeColorDash(color.sG);
  const bDash = computeColorDash(color.sB);
  return rDash * 0.2126 + gDash * 0.7152 + bDash * 0.0722;
}

/**
 * 輝度比を計算
 * (L1 + 0.05) / (L2 + 0.05)
 * @param {Color} c1 L1, L2を考慮しなくて良い
 * @param {Color} c2 L1, L2を考慮しなくて良い
 * @return {Number} 輝度比
 */
function ratioLuminance(c1: Color, c2: Color): number {
  const c1Lumi = luminance(c1);
  const c2Lumi = luminance(c2);
  let L1;
  let L2;
  if (c1Lumi > c2Lumi) {
    L1 = c1Lumi;
    L2 = c2Lumi;
  } else {
    L1 = c2Lumi;
    L2 = c1Lumi;
  }
  return (L1 + 0.05) / (L2 + 0.05);
}

/**
 * 輝度比が基準を準拠しているか
 * largeScale: 3以上
 * default: 4.5以上
 * strict: 7以上
 * @param {Color} c1 L1, L2を考慮しなくて良い
 * @param {Color} c2 L1, L2を考慮しなくて良い
 * @param 輝度比チェックにおける基準値の指定
 * @return {Boolean} 輝度比が基準以上ならtrue
 */
function isRatioLuminanceFollowing(
  c1: Color,
  c2: Color,
  type: 'largeScale' | 'default' | 'strict' = 'default'
): boolean {
  let threshold = 4.5;
  switch (type) {
    case 'largeScale':
      threshold = 3;
      break;
    case 'default':
      threshold = 4.5;
      break;
    case 'strict':
      threshold = 7;
      break;
  }
  return ratioLuminance(c1, c2) >= threshold;
}

/**
 * 色の差
 * RGBの値の差分の合計を計算する
 * Abs(Rf - Rb) + Abs(Gf - Gb) + Abs(Bf - Bb)
 * ただし、Xf は全景色, Xb は背景色
 * @param {Color} c1
 * @param {Color} c2
 * @return {Number} RGBの差分の合計
 */
function diffColorValue(c1: Color, c2: Color) {
  return Math.abs(c1.R - c2.R) + Math.abs(c1.G - c2.G) + Math.abs(c1.B - c2.B);
}

/**
 * 色差が基準に準拠しているか
 * @param {Color} c1
 * @param {Color} c2
 * @return {Boolean} 色差が500以上であればtrue
 */
function isDiffColorFollowing(c1: Color, c2: Color): boolean {
  const ruleValue = 500;
  return diffColorValue(c1, c2) >= ruleValue;
}

export {
  brightness,
  diffBrightness,
  isDiffBrightnessFollowing,
  luminance,
  ratioLuminance,
  isRatioLuminanceFollowing,
  diffColorValue,
  isDiffColorFollowing,
};
