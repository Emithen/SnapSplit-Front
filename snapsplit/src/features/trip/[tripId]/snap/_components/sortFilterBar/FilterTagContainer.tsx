import { FilterState } from '../../type';
import FilterTag from './FilterTag';
import Image from 'next/image';

type FilterTagContainerProps = {
  filters: FilterState;
};

function FilterTagContainer({ filters }: FilterTagContainerProps) {
  const isTagExist = filters.days.length > 0 || filters.people.length > 0 || filters.locations.length > 0;

  if (!isTagExist) {
    return null;
  } else {
    return (
      <div className="flex-1 flex items-center gap-1.5 min-h-8">
        <button className="flex-shrink-0 flex justify-center items-center bg-primary w-7 h-7 rounded-full">
          <Image src="/svg/refresh.svg" alt="refresh" width={12} height={12} />
        </button>
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
          {filters.days.length > 0 && <FilterTag label={`Day ${filters.days.join(', ')}`} />}
          {filters.people.length > 0 && <FilterTag label={filters.people.join(', ')} />}
          {filters.locations.length > 0 && <FilterTag label={filters.locations.join(', ')} />}
        </div>
      </div>
    );
  }
}

export default FilterTagContainer;
