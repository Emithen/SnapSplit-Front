import { FilterState } from '@/features/trip/[tripId]/snap/type';
import DaySection from './DaySection';
import PeopleSection from './PeopleSection';
import LocationSection from './LocationSection';
import ButtonSection from './ButtonSection';

interface FilterBottomSheetProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onClose: () => void;
}

export default function FilterBottomSheet({ filters, setFilters, onClose }: FilterBottomSheetProps) {
  return (
    <div className="w-full bg-white rounded-t-xl pt-5 px-5 pb-9">
      <div className="flex flex-col gap-6">
        <DaySection filters={filters} setFilters={setFilters} />

        <PeopleSection filters={filters} setFilters={setFilters} />

        <LocationSection filters={filters} setFilters={setFilters} />

        <ButtonSection onClose={onClose} />
      </div>
    </div>
  );
}
