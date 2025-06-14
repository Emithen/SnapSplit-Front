'use client';
import { useState } from 'react';
import CountryList from '@trip/createTrip/steps/Step1_CountrySearch/CountryList';
import SearchBar from '@/shared/components/ui/SearchBar';
import SelectedCountry from '@trip/createTrip/steps/Step1_CountrySearch/SelectedCountry';
import BottomCTAButton from '@/shared/components/ui/BottomCTAButton';

type Props = {
  countries: { countryId: number; countryName: string }[];
  selected: string[];
  onToggle: (countryName: string) => void;
  onNext: () => void;
};

const CountrySearchSection = ({ countries, selected, onToggle, onNext }: Props) => {
  // 검색어 상태 관리
  const [searchKeyword, setSearchKeyword] = useState('');
  // 검색어에 따라 필터링된 국가 목록 생성
  const filteredCountries = countries.filter(({ countryName }) =>
    countryName.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-between px-5">
      <div className="pb-6">
        <p className="text-head-1">어디로 떠나시나요?</p>
        <p className="text-body-2 text-grey-850">여행지가 여러 곳이라면 모두 입력해주세요</p>
      </div>
      <SearchBar
        placeholder="여행지를 검색해보세요"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <SelectedCountry selected={selected} onRemove={onToggle} />
      <CountryList countries={filteredCountries} selected={selected} onToggle={onToggle} />
      {selected.length > 0 && (
        <BottomCTAButton
          label={
            selected.length >= 2 ? `${selected[0]} 외 ${selected.length - 1}개 선택 완료` : `${selected[0]} 선택 완료`
          }
          onClick={onNext}
        />
      )}
    </div>
  );
};

export default CountrySearchSection;
