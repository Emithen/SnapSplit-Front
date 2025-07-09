import Image from 'next/image';
import { FilterState } from '../../type';
import FilterTagContainer from './FilterTagContainer';

interface SortFilterBarProps {
  selectedSort: string;
  onSortOpen: () => void;
  onFilterOpen: () => void;
  filters: FilterState;
}

export default function SortFilterBar({ selectedSort, onSortOpen, onFilterOpen, filters }: SortFilterBarProps) {
  return (
    <div className="flex items-center justify-between w-full mt-50 mb-auto px-5 py-4">
      <div className="flex flex-col">
        <FilterTagContainer filters={filters} />
        <button
          onClick={onSortOpen}
          className="flex items-center h-8 text-body-2 pl-3 pr-1 py-1 rounded-full bg-white border-1 border-grey-250"
        >
          {selectedSort} <Image src="/svg/arrow_bottom.svg" alt="arrowBottom" width={24} height={24} />
        </button>
      </div>
      <button
        onClick={onFilterOpen}
        className="flex items-center w-8 h-8 p-1 bg-white rounded-full border-1 border-grey-250"
      >
        <Image src="/svg/filter-grey-650.svg" alt="filter" width={24} height={24} />
      </button>
    </div>
  );
}
