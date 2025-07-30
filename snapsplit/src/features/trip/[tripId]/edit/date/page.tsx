'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import SelectDateSection from '@/shared/components/steps/Step2_SelectDate';
import mock from '@public/mocks/edit-date-mock.json';
import { EditDatePageProps } from './type';
import { parseISO } from 'date-fns'; // 원하면 parseISO 사용 가능

export default function EditDatePage({ tripId }: EditDatePageProps) {
  console.log('tripId : ' + tripId);
  const router = useRouter();

  // ISO 문자열 → Date 객체로 변환
  const initialStart = parseISO(mock.data.startDate);
  const initialEnd = parseISO(mock.data.endDate);

  // Date 상태 관리
  const [startDate, setStartDate] = useState<Date | null>(initialStart);
  const [endDate, setEndDate] = useState<Date | null>(initialEnd);

  const handleNext = () => {
    router.back();
    // 편집 API 호출
  };

  return (
    <SelectDateSection
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      onClick={handleNext}
    />
  );
}
