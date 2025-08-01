import Image from 'next/image';
import arrowLeft from '@public/svg/arrow-left-grey-1000.svg';
import Link from 'next/link';

interface ExpenseDetailHeaderProps {
  tripId: string;
}

export default function ExpenseDetailHeader({ tripId }: ExpenseDetailHeaderProps) {
  return (
    <header className="flex items-center justify-between px-5 py-3">
      <Link href={`/trip/${tripId}/budget`}>
        <Image src={arrowLeft} alt="back button" />
      </Link>

      <div className="flex items-center space-x-4 text-body-1">
        <button className="cursor-pointer">수정</button>
        <button className="cursor-pointer text-status_error">삭제</button>
      </div>
    </header>
  );
}
