import { CountryComponentProps, CountryListProps } from '@trip/createTrip/steps/Step1_CountrySearch/type';

const CountryComponent = ({ countryName, isSelected, onClick }: CountryComponentProps) => {
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

const CountryList = ({ countries, selected, onToggle }: CountryListProps) => {
  return (
    <div
      className="space-y-5 overflow-y-auto pb-5 scrollbar-hide scrollbar-hide::-webkit-scrollbar"
      style={{ height: 'calc(100vh - 348px - 16px)' }}
    >
      {/* 고정 높이 추후 조정하기 */}
      {countries.map((country) => (
        <CountryComponent
          key={country.countryId}
          countryName={country.countryName}
          isSelected={selected.some((c) => c.countryId === country.countryId)}
          onClick={() => onToggle(country)}
        />
      ))}
    </div>
  );
};

export default CountryList;
