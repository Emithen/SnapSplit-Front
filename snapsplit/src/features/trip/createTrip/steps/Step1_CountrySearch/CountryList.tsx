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
        className={`px-3 py-1 rounded-[30px] outline-1 outline-offset-[-1px] cursor-pointer text-body-2 
          ${isSelected ? 'outline-grey-650 text-grey-650' : 'outline-grey-250 text-grey-450'}`}
      >
        선택
      </button>
    </div>
  );
};

const CountryList = ({ countries, selected, onToggle }: Props) => {
  return (
    <div
      className="space-y-5 overflow-y-auto pb-5 scrollbar-hide scrollbar-hide::-webkit-scrollbar"
      style={{ height: 'calc(100vh - 348px - 16px)' }}
    >
      {/* 고정 높이 추후 조정하기 */}
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
