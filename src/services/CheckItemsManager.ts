import { CheckItemData } from '@/domains/CheckItemData';
import { CheckItemNameType } from '@/domains/CheckItemNameType';

export class CheckItemsManager {
  items: CheckItemData[];

  constructor(items: CheckItemData[]) {
    this.items = items;
  }

  private fetchItem(fromKey: CheckItemNameType): CheckItemData {
    const item = this.items.find((item) => item.name === fromKey);
    if (item !== undefined) {
      return item;
    } else {
      throw new Error('Not Found fromKey Data');
    }
  }

  fetchLuminanceRatioItem(): CheckItemData {
    try {
      return this.fetchItem('luminance-ratio');
    } catch (error) {
      return new CheckItemData(
        'luminance-ratio',
        'Non Value',
        'Non Value',
        null
      );
    }
  }

  fetchDiffBrightnessItem(): CheckItemData {
    try {
      return this.fetchItem('diff-brightness');
    } catch (error) {
      return new CheckItemData(
        'diff-brightness',
        'Non Value',
        'Non Value',
        null
      );
    }
  }

  fetchDiffColorValueItem(): CheckItemData {
    try {
      return this.fetchItem('diff-color-value');
    } catch (error) {
      return new CheckItemData(
        'diff-color-value',
        'Non Value',
        'Non Value',
        null
      );
    }
  }
}
