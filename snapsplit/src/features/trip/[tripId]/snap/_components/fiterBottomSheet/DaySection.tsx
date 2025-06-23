import { FilterState } from "../../type";

function DaySection({ filters, setFilters }: { filters: FilterState; setFilters: React.Dispatch<React.SetStateAction<FilterState>> }) {
  return (
    <div>
      <p className="text-title-1">여행 일자</p>
      <div className="flex gap-2 flex-wrap pt-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            key={i}
            className={`px-3 h-8 rounded-full text-body-2 ${filters.days.includes(i + 1) ? 'bg-black text-white' : 'bg-grey-150'}`}
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
