'use client';

import BottomCTAButton from '@/shared/components/BottomCTAButton';
import { SelectDateSectionProps } from './type';
import TripDatePicker from './TripDatePicker';
import { useState } from 'react';

const SelectDateSection = ({ onClick: handleNextStep }: SelectDateSectionProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col px-5" style={{ height: 'calc(100vh - 95px - 16px)' }}>
      <div className="pb-6">
        <p className="text-head-1">여행 일정을 등록해주세요</p>
        <p className="text-body-2 text-grey-850">캘린더에서 떠나는 날과 돌아오는 날을 선택하세요</p>
      </div>
      <div className="flex-1">
        <TripDatePicker
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={(newStartDate: Date | null) => {
            setStartDate(newStartDate);
          }}
          onEndDateChange={(newEndDate: Date | null) => {
            setEndDate(newEndDate);
          }}
        />
      </div>
      {
        startDate && (
          <div className="py-5">
            <BottomCTAButton label={endDate ? '다음으로' : '당일 일정으로 선택'} onClick={handleNextStep} />
          </div>
        )
      }
    </div>
  );
};

export default SelectDateSection;
