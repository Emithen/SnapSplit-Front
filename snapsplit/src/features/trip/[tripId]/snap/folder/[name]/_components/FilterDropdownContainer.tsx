import { FilterState } from "@/features/trip/[tripId]/snap/type";
import Image from "next/image";

type FilterDropdownContainerProps = {
    filters: FilterState;
}

function FilterDropdownContainer({filters}: FilterDropdownContainerProps) {
    return (
        <div className="flex gap-2">
            {filters.days.length > 0 && (
              <div className="flex justify-center items-center bg-grey-150 pl-3 pr-1 h-7 rounded-full text-body-2">Day {filters.days.join(', ')}
              <Image src="/svg/arrow_bottom.svg" alt="filter" width={24} height={24} />
              </div>
            )}
            {filters.people.length > 0 && (
              <div className="flex justify-center items-center bg-grey-150 pl-3 pr-1 h-7 rounded-full text-body-2">{filters.people.join(', ')}
              <Image src="/svg/arrow_bottom.svg" alt="filter" width={24} height={24} />
              </div>
            )}
            {filters.locations.length > 0 && (
              <div className="flex justify-center items-center bg-grey-150 pl-3 pr-1 h-7 rounded-full text-body-2">{filters.locations.join(', ')}
              <Image src="/svg/arrow_bottom.svg" alt="filter" width={24} height={24} />
              </div>
            )}
        </div>
    )
}

export default FilterDropdownContainer