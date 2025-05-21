import CountryList from './CountrySearch/CountryList';
import CountrySearchBar from './CountrySearch/SearchBar';
import SelectedCountry from './CountrySearch/SelectedCountry';

const CountrySearchSection = () => {
  return (
    <div>
      <CountrySearchBar />
      <SelectedCountry />
      <CountryList />
    </div>
  );
};

export default CountrySearchSection;
