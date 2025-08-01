import Image from 'next/image';
import arrowLeft from '@public/svg/arrow-left-grey-1000.svg';

export default function ExpenseDetailHeader() {
  return (
    <header className="flex items-center justify-between px-5 py-3">
      <button onClick={() => history.back()} className="cursor-pointer">
        <Image src={arrowLeft} alt="back button" />
      </button>
      <div className="flex items-center space-x-4 text-body-1">
        <button className="cursor-pointer">수정</button>
        <button className="cursor-pointer text-status_error">삭제</button>
      </div>
    </header>
  );
}
