import CountryList from '@trip/createTrip/steps/Step1_CountrySearch/CountryList';
import CountrySearchBar from '@trip/createTrip/steps/Step1_CountrySearch/CountrySearchBar';
import SelectedCountry from '@trip/createTrip/steps/Step1_CountrySearch/SelectedCountry';

const CountrySearchSection = () => {
  return (
    <div className="px-5">
      <div className="pb-6">
        <p className="text-head-1">어디로 떠나시나요?</p>
        <p className="text-body-2">여행지가 여러 곳이라면 모두 입력해주세요</p>
      </div>
      <CountrySearchBar />
      <SelectedCountry />
      <CountryList />
    </div>
  );
};

export default CountrySearchSection;
