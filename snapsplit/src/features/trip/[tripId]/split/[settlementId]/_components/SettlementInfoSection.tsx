'use client';

import arrow from '@public/svg/arrow-bottom-grey-450.svg';
import Image from 'next/image';
import { SettlementInfoSectionProps } from '../type';

export default function SettlementInfoSection({ members, startDate, endDate }: SettlementInfoSectionProps) {
  return (
    <div className="flex w-full justify-between items-end pb-6">
      <h1 className="text-head-1">
        <span className="text-primary">Day 7 ~ Day 8</span> 까지의
        <br />
        정산 내역이에요
      </h1>
      <button className="flex items-center whitespace-nowrap cursor-pointer pl-3 pr-[6px] py-1 rounded-[20px] bg-white border-1 border-grey-250 text-body-2">
        윤유빈
        <Image src={arrow} alt="member Pick" width={24} height={24} />
      </button>
    </div>
  );
}
