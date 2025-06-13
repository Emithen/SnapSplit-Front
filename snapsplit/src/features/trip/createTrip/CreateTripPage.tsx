'use client';
import { useState } from 'react';

import StepProgressBar from '@trip/createTrip/_components/StepProgressBar';
import CreateTripHeader from '@trip/createTrip/_components/CreateTripHeader';
import CountrySearchSection from '@trip/createTrip/steps/Step1_CountrySearch';
import SelectDateSection from './steps/Step2_SelectDate';
import AddMemberSection from '@trip/createTrip/steps/Step3_AddMember';
import InputTripName from './steps/Step4_InputTripName';

// steps로 단계별 컴포넌트를 랜더링해주는 Multi Step Form 페이지
export default function CreateTripPage() {
  const [step, setStep] = useState(1);

  /* 스탭 이동 테스트 */
  const goNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const goPrev = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      <div>
        <CreateTripHeader />
        <StepProgressBar step={step} />

        {step === 1 && <CountrySearchSection />}
        {step === 2 && <SelectDateSection />}
        {step === 3 && <AddMemberSection />}
        {step === 4 && <InputTripName />}

        {/* 스탭 이동 테스트 */}
        <button onClick={goPrev} disabled={step === 1}>
          이전
        </button>
        <button onClick={goNext} disabled={step === 4}>
          다음
        </button>
      </div>
    </div>
  );
}
