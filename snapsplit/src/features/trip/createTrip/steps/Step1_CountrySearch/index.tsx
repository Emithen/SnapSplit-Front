import CountryList from '@trip/createTrip/steps/Step1_CountrySearch/CountryList';
import SearchBar from '@trip/createTrip/_components/SearchBar';
import SelectedCountry from '@trip/createTrip/steps/Step1_CountrySearch/SelectedCountry';

type Props = {
  countries: { countryId: number; countryName: string }[];
  selected: string[];
  onToggle: (countryName: string) => void;
};

const CountrySearchSection = ({ countries, selected, onToggle }: Props) => {
  return (
    <div className="px-5">
      <div className="pb-6">
        <p className="text-head-1">어디로 떠나시나요?</p>
        <p className="text-body-2 text-grey-850">여행지가 여러 곳이라면 모두 입력해주세요</p>
      </div>
      <SearchBar placeholder="여행지를 검색해보세요" />
      <SelectedCountry selected={selected} onRemove={onToggle} />
      <CountryList countries={countries} selected={selected} onToggle={onToggle} />
    </div>
  );
};

export default CountrySearchSection;
