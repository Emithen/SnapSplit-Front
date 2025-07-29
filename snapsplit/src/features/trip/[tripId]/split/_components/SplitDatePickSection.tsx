'use client';

import { useState } from 'react';
import alertCircleRed from '@public/svg/alert-circle-red.svg';
import Image from 'next/image';
import Button from '@/shared/components/Button';
import OverlayModal from '@/shared/components/modal/OverlayModal';
import ConfirmSplitModal from './modal/ConfirmSplitModal';

const leftOptions = ['여행 준비', 'Day 0', 'Day 1', 'Day 2'];
const rightOptions = ['Day 1', 'Day 2', 'Day 3', 'Day 4'];

export default function SplitDatePickSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [startDate, setStartDate] = useState('여행 준비');
  const [endDate, setEndDate] = useState('Day 1');

  return (
    <div className="flex w-fulll flex-col">
      <div className="flex w-full gap-2 items-center pb-2">
        <select
          className="px-4 py-[14px] rounded-xl w-full border-1 border-grey-250 bg-white focus:outline-none cursor-pointer text-body-2"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        >
          {leftOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <span className="text-head-1">~</span>

        <select
          className="px-4 py-[14px] rounded-xl w-full border-1 border-grey-250 bg-white focus:outline-none cursor-pointer text-body-2"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        >
          {rightOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* 지출 내역이 없다면 랜더링 */}
      <div className="flex gap-1 items-center justify-start pb-4">
        <Image src={alertCircleRed} alt="Alert Icon" width={24} height={24} className="" />
        <p className="text-status_error text-body-2">등록된 지출 내역이 없어요</p>
      </div>

      <Button label="정산하기" enabled={true} onClick={() => setIsModalOpen(true)} />

      <OverlayModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} position="center" className="px-5">
        <ConfirmSplitModal onClose={() => setIsModalOpen(false)} />
      </OverlayModal>
    </div>
  );
}
