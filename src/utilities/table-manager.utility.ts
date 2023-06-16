import { rankItem } from '@tanstack/match-sorter-utils';
import { FilterFn } from '@tanstack/react-table';

export const fuzzyFilter: FilterFn<unknown> = (
  row,
  columnId,
  value,
  addMeta
) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};

export const filterObjectArray: FilterFn<any> = (row, columnId, value) => {
  const a = row.getValue(columnId) as Array<any>;
  return a.some((item) => item.name === value);
};