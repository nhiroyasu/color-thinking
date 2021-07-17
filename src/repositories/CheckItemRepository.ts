import CHECK_ITEM_JSON from '@/assets/resources/check-item-data.json';
import { CheckItemData } from '@/domains/CheckItemData';
import { isCheckItemNameType } from '@/domains/CheckItemNameType';

function fetchCheckItemData(): CheckItemData[] {
  const checkItemDataList: CheckItemData[] = [];
  CHECK_ITEM_JSON.forEach((item) => {
    const itemName = item.name;
    if (isCheckItemNameType(itemName)) {
      checkItemDataList.push(
        new CheckItemData(
          itemName,
          item.label,
          item.description,
          item.reference
        )
      );
    }
  });
  return checkItemDataList;
}

export { fetchCheckItemData };
