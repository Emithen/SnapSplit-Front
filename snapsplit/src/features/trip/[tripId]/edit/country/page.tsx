'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import CountrySearchSection from '@/shared/components/steps/Step1_CountrySearch';
import { EditCountryPageProps } from './type';
import { Country } from '@/shared/types/country';
import mock from '@public/mocks/edit-country-mock.json';

const EditCountryPage = ({ tripId }: EditCountryPageProps) => {
  console.log('tripId : ' + tripId);
  const router = useRouter();

  // mock 데이터
  const countries: Country[] = mock.data.countries;
  const [selected, setSelected] = useState<Country[]>(mock.data.selectedCountries);

  // 토글 핸들러
  const toggleCountry = (country: Country) => {
    setSelected((prev) =>
      prev.some((c) => c.countryId === country.countryId)
        ? prev.filter((c) => c.countryId !== country.countryId)
        : [...prev, country]
    );
  };

  // "완료" 버튼 클릭 시, 예: API 호출 후 뒤로 가기
  const handleSave = async () => {
    // await fetch(`/api/trips/${tripId}/countries`, {
    //   method: 'PATCH',
    //   body: JSON.stringify({ countries: selected }),
    // });
    router.back();
  };

  return (
    <CountrySearchSection
      variant="edit"
      countries={countries}
      selected={selected}
      onToggle={toggleCountry}
      onClick={handleSave}
    />
  );
};

export default EditCountryPage;
