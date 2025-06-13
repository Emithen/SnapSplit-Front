const Country = ({ countryName, isSelected }: CountryProps) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-body-2">{countryName}</p>
      <button
        className={`px-3 py-1 rounded-[30px] outline-1 outline-offset-[-1px] text-body-2 
          ${isSelected ? 'outline-grey-650 text-grey-650' : 'outline-grey-250 text-grey-450'}`}
      >
        선택
      </button>
    </div>
  );
};

const CountryList = () => {
  return (
    <div>
      {/* map으로 불러오기 */}
      <Country countryName="프랑스" isSelected={true} />
      <Country countryName="네덜란드" isSelected={false} />
    </div>
  );
};

export default CountryList;
