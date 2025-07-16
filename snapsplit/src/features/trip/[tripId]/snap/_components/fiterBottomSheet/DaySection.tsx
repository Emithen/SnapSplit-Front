import { FilterState } from "../../type";

function DaySection({ filters, setFilters }: { filters: FilterState; setFilters: React.Dispatch<React.SetStateAction<FilterState>> }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-body-3 text-grey-1000">여행 일자</p>
      <div className="flex gap-2 flex-wrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-0.75 rounded-[20px] text-body-3 ${filters.days.includes(i + 1) ? 'bg-primary text-white' : 'bg-white text-grey-450 box-border border-1 border-grey-250'}`}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                days: prev.days.includes(i + 1)
                  ? prev.days.filter((d) => d !== i + 1)
                  : [...prev.days, i + 1],
              }))
            }
          >
            Day {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DaySection;
