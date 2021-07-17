export type CheckItemNameType =
  | 'luminance-ratio'
  | 'diff-brightness'
  | 'diff-color-value';

export const isCheckItemNameType = (item: string): item is CheckItemNameType =>
  ['luminance-ratio', 'diff-brightness', 'diff-color-value'].includes(item);
