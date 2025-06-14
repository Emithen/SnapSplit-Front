'use client';
import { useState, useEffect } from 'react';

import StepProgressBar from '@trip/createTrip/_components/StepProgressBar';
import CreateTripHeader from '@trip/createTrip/_components/CreateTripHeader';
import CountrySearchSection from '@trip/createTrip/steps/Step1_CountrySearch';
import SelectDateSection from './steps/Step2_SelectDate';
import AddMemberSection from '@trip/createTrip/steps/Step3_AddMember';
import InputTripNameSection from './steps/Step4_InputTripName';
import { Country } from '@/shared/types/country';

// steps로 단계별 컴포넌트를 랜더링해주는 Multi Step Form 페이지
export default function CreateTripPage() {
  // 현재 진행 중인 스탭
  const [step, setStep] = useState(1);

  // 국가 데이터 상태
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  // JSON에서 국가 목록 로딩
  useEffect(() => {
    fetch('/mocks/countries.json')
      .then((res) => res.json())
      .then((json) => setCountries(json.data));
  }, []);

  // 국가 선택/해제 토글
  const toggleCountry = (country: { countryId: number; countryName: string }) => {
    setSelectedCountries((prev) =>
      prev.some((c) => c.countryId === country.countryId)
        ? prev.filter((c) => c.countryId !== country.countryId)
        : [...prev, country]
    );
  };

  // 스탭 이동
  const goNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const goPrev = () => setStep((prev) => Math.max(prev - 1, 1));

  // 스탭마다 랜더링 할 컴포넌트들을 배열로 관리
  const steps = [
    <CountrySearchSection
      key="step1"
      countries={countries}
      selected={selectedCountries}
      onToggle={toggleCountry}
      onNext={goNext}
    />,
    <SelectDateSection key="step2" onNext={goNext} />,
    <AddMemberSection key="step3" onNext={goNext} />,
    <InputTripNameSection key="step4" onNext={goNext} />,
  ];

  return (
    <div>
      {/* 공통 헤더 & 진행 바 */}
      <CreateTripHeader step={step} onPrev={goPrev} />
      <StepProgressBar step={step} />

      {/* 현재 스텝에 해당하는 컴포넌트 렌더링 */}
      {steps[step - 1]}
    </div>
  );
}
