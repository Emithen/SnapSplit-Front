import { FilterState } from "../../type";

function LocationSection({ filters, setFilters }: { filters: FilterState; setFilters: React.Dispatch<React.SetStateAction<FilterState>> }) {
  const locations = ['런던', '파리', '취리히'];

  return (
    <div>
      <p className="text-title-1">장소</p>
      <div className="flex gap-2 flex-wrap pt-3">
        {locations.map(loc => (
          <button
            key={loc}
            className={`px-3 h-8 rounded-full text-body-2 ${filters.locations.includes(loc) ? 'bg-black text-white' : 'bg-grey-150'}`}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                locations: prev.locations.includes(loc)
                  ? prev.locations.filter((l) => l !== loc)
                  : [...prev.locations, loc],
              }))
            }
          >
            {loc}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LocationSection;