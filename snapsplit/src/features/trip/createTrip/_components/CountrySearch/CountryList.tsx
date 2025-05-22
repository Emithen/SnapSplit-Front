const Country = ({ countryName, isSelected }: CountryProps) => {
  return (
    <div className="flex justify-between">
      <p className="text-body-2">{countryName}</p>
      <p>{isSelected}선택</p>
    </div>
  );
};

const CountryList = () => {
  return (
    <div>
      <Country countryName="프랑스" isSelected={true} />
    </div>
  );
};

export default CountryList;
