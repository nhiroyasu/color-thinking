import { CheckItemData } from './CheckItemData';

export class CheckItemProp {
  /**
   * チェック項目をクリアしているかのフラグ
   */
  flag: boolean;

  /**
   * チェック項目のラベル
   */
  label: string;

  /**
   * チェック項目の説明
   */
  description: string;

  /**
   * @nullable
   * リファレンスのリンク
   */
  reference: string | null;

  constructor(
    flag: boolean,
    label: string,
    description: string,
    reference: string | null
  ) {
    this.flag = flag;
    this.label = label;
    this.description = description;
    this.reference = reference;
  }
}
