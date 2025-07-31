'use client';

import { useState } from 'react';
import SearchBar from '@/shared/components/SearchBar';
import TripImageUploader from './TripImageUploader';
import BottomCTAButton from '@/shared/components/BottomCTAButton';
import { InputTripNameSectionProps } from './type';

const InputTripNameSection = ({
  onClick: handleNextStep,
  tripName = '',
  tripImage = '',
}: InputTripNameSectionProps) => {
  const [name, setName] = useState<string>(tripName);

  return (
    <div className="px-5 flex flex-1 flex-col justify-between pb-3" style={{ height: 'calc(100vh - 95px - 16px)' }}>
      <div className="flex flex-col">
        <div className="pb-6">
          <p className="text-head-1">
            여행명을 설정하고
            <br />
            대표사진을 추가해보세요
          </p>
        </div>

        <TripImageUploader initialImage={tripImage} />

        <SearchBar placeholder="여행명을 입력해주세요" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <BottomCTAButton label="다음으로" onClick={handleNextStep} />
    </div>
  );
};

export default InputTripNameSection;
