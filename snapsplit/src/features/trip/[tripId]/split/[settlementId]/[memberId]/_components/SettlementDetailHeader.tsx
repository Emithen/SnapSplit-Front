import Image from 'next/image';
import arrow from '@public/svg/arrow-left-grey-1000.svg';
import Link from 'next/link';
import { SettlementDetailHeaderProps } from '../type';

export default function SettlementDetailHeader({ tripId, settlementId }: SettlementDetailHeaderProps) {
  return (
    <header className="flex px-5 py-3 bg-amber-50 justify-between">
      <Link href={`/trip/${tripId}/split/${settlementId}`}>
        <Image src={arrow} alt="back button" />
      </Link>
      개별 지출 금액
      <div className="w-5 h-5" />
    </header>
  );
}
