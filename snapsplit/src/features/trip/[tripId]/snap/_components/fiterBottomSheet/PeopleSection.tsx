import { FilterState } from "../../type";

function PeopleSection({ filters, setFilters }: { filters: FilterState; setFilters: React.Dispatch<React.SetStateAction<FilterState>> }) {
  const people = ['유빈', '지수', '나경', '연수'];

  return (
    <div className="flex flex-col gap-2">
      <p className="text-body-3 text-grey-1000">사람</p>
      <div className="flex gap-2 flex-wrap">
        {people.map(name => (
          <button
            key={name}
            className={`px-3 py-0.75 rounded-[20px] text-body-3 h-[29px] border box-border ${filters.people.includes(name) ? 'bg-primary text-white border-primary' : 'bg-white text-grey-450 border-grey-250'}`}
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
