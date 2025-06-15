import Image from 'next/image';
import topArrow from '@public/svg/topArrow.svg';

export type TotalExpenseBottomSheetProps = {
  tripTotalExpense?: number;
};

const TotalExpenseBottomSheet = ({ tripTotalExpense = 0 }: TotalExpenseBottomSheetProps) => {
  // 지출 금 "원" 으로 표기할지 상의

  return (
    <div className="self-stretch px-2.5 pt-0.5 pb-4 bg-neutral-500 shadow-[0px_-2px_10px_0px_rgba(108,108,108,0.12)] inline-flex flex-col justify-center items-center">
      <div className="w-6 h-6 flex flex-col justify-center items-center overflow-hidden">
        <Image alt="↑" src={topArrow} />
      </div>
      <div className="justify-start text-neutral-50 text-lg font-semibold font-['Pretendard'] leading-relaxed">
        총 {tripTotalExpense.toLocaleString()}원 지출
      </div>
    </div>
  );
};

export default TotalExpenseBottomSheet;
