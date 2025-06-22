import { FilterState } from "../../type";

function PeopleSection({ filters, setFilters }: { filters: FilterState; setFilters: React.Dispatch<React.SetStateAction<FilterState>> }) {
  const people = ['유빈', '지수', '나경', '연수'];

  return (
    <div>
      <p className="text-title-1">사람</p>
      <div className="flex gap-2 flex-wrap pt-3">
        {people.map(name => (
          <button
            key={name}
            className={`px-3 h-8 rounded-full text-body-2 ${filters.people.includes(name) ? 'bg-black text-white' : 'bg-grey-150'}`}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                people: prev.people.includes(name)
                  ? prev.people.filter((p) => p !== name)
                  : [...prev.people, name],
              }))
            }
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PeopleSection;
