import { FilterState } from "@/features/trip/[tripId]/snap/type";
import Image from 'next/image';
import FilterDropdownContainer from "./FilterDropdownContainer";

function FilterBar({
  filters,
  onFilterOpen,
}: {
  filters: FilterState;
  onFilterOpen: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <FilterDropdownContainer filters={filters} />
      <button 
        onClick={onFilterOpen}
        className="self-start"
      >
        <Image
          src="/svg/filter.svg"
          alt="filter"
          width={24}
          height={24}
        />
      </button>
    </div>
  )
}

export default FilterBar