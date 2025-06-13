type Props = {
  countries: { countryId: number; countryName: string }[];
  selected: string[];
  onToggle: (countryName: string) => void;
};

const Country = ({
  countryName,
  isSelected,
  onClick,
}: {
  countryName: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-body-2">{countryName}</p>
      <button
        onClick={onClick}
        className={`px-3 py-1 rounded-[30px] outline-1 outline-offset-[-1px] text-body-2 
          ${isSelected ? 'outline-grey-650 text-grey-650' : 'outline-grey-250 text-grey-450'}`}
      >
        선택
      </button>
    </div>
  );
};

const CountryList = ({ countries, selected, onToggle }: Props) => {
  return (
    <div className="space-y-2">
      {countries.map(({ countryName, countryId }) => (
        <Country
          key={countryId}
          countryName={countryName}
          isSelected={selected.includes(countryName)}
          onClick={() => onToggle(countryName)}
        />
      ))}
    </div>
  );
};

export default CountryList;
