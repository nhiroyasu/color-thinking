import { CheckItemNameType } from './CheckItemNameType';

export class CheckItemData {
  /**
   * チェック項目の固有の名前
   */
  name: CheckItemNameType;

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
    name: CheckItemNameType,
    label: string,
    description: string,
    reference: string | null
  ) {
    this.name = name;
    this.label = label;
    this.description = description;
    this.reference = reference;
  }
}
