'use client';

import { useState } from 'react';
import alertCircleRed from '@public/svg/alert-circle-red.svg';
import Image from 'next/image';
import Button from '@/shared/components/Button';
import OverlayModal from '@/shared/components/modal/OverlayModal';
import ConfirmSplitModal from './modal/ConfirmSplitModal';
import arrowButtom from '@public/svg/arrow-bottom-grey-450.svg';
import BottomSheet from '@/shared/components/bottom-sheet/BottomSheet';
import DatePickButtonSheet from './modal/DatePickBottomSheet';
import { SplitDatePickSectionProps } from '../type';

// API 에서 받아온 date string 날짜들을 day로 관리하기 위한 배열
// 정산 가능 날짜도 따로 받아와야 한다
const tripDate = ['여행 준비', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

export default function SplitDatePickSection({ selectableDates, tripStartDate }: SplitDatePickSectionProps) {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);

  // 예시용 지출 여부 상태 (추후 API 연동 시 수정)
  const hasExpense = true;

  // 선택된 날짜 인덱스 상태 관리
  const [startDayIndex, setStartDayIndex] = useState<number | null>(tripDate.length > 0 ? 0 : null);
  const [endDayIndex, setEndDayIndex] = useState<number | null>(tripDate.length > 0 ? tripDate.length - 1 : null);
  const [datePickType, setDatePickType] = useState<'start' | 'end' | null>(null);

  // 날짜 유효성 검증
  const isValidDateRange = startDayIndex !== null && endDayIndex !== null && startDayIndex <= endDayIndex;

  // 조건부 에러 메시지
  const errorMessage = !hasExpense
    ? '등록된 지출 내역이 없어요'
    : !isValidDateRange
      ? '날짜 범위가 잘못 선택됐어요'
      : null;

  return (
    <div className="flex w-fulll flex-col">
      <div className="flex w-full gap-2 items-center pb-2">
        <button
          aria-label="정산 시작 날짜 선택"
          className="flex items-center justify-between px-4 py-[14px] rounded-xl w-full border-1 border-grey-250 bg-white focus:outline-none cursor-pointer text-body-2"
          onClick={() => {
            setDatePickType('start');
            setIsDateModalOpen(true);
          }}
        >
          {startDayIndex !== null ? tripDate[startDayIndex] : '시작일 선택'}
          <Image src={arrowButtom} alt="Arrow Button" className="" />
        </button>
        <span className="text-head-1">~</span>
        <button
          aria-label="정산 종료 날짜 선택"
          className="flex items-center justify-between px-4 py-[14px] rounded-xl w-full border-1 border-grey-250 bg-white focus:outline-none cursor-pointer text-body-2"
          onClick={() => {
            setDatePickType('end');
            setIsDateModalOpen(true);
          }}
        >
          {endDayIndex !== null ? tripDate[endDayIndex] : '종료일 선택'}
          <Image src={arrowButtom} alt="Arrow Button" className="" />
        </button>

        {/* 정산 날짜 선택 바텀시트 */}
        <BottomSheet
          isOpen={isDateModalOpen}
          onClose={() => {
            setIsDateModalOpen(false);
          }}
        >
          <DatePickButtonSheet
            tripDate={tripDate}
            selectedIndex={datePickType === 'start' ? startDayIndex : endDayIndex}
            setSelectedIndex={datePickType === 'start' ? setStartDayIndex : setEndDayIndex}
            onClose={() => setIsDateModalOpen(false)}
          />
        </BottomSheet>
      </div>

      {/* 에러 메시지 표시 */}
      {errorMessage && (
        <div className="flex gap-1 items-center justify-start">
          <Image src={alertCircleRed} alt="Alert Icon" width={24} height={24} className="" />
          <p className="text-status_error text-body-2">{errorMessage}</p>
        </div>
      )}

      <Button
        label="정산하기"
        enabled={hasExpense && isValidDateRange}
        onClick={() => setIsConfirmModalOpen(true)}
        className="mt-4"
      />

      {/* 정산 확인 모달 */}
      <OverlayModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        position="center"
        className="px-5"
      >
        <ConfirmSplitModal onClose={() => setIsConfirmModalOpen(false)} />
      </OverlayModal>
    </div>
  );
}
