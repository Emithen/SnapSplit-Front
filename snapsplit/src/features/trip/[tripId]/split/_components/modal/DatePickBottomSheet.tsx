import Image from 'next/image';
import unCheckedIcon from '@public/svg/check_grey.svg';
import CheckedIcon from '@public/svg/check-green.svg';

// 여행준비~ Day1, Day2, ... 등 여행 날짜를 선택할 수 있는 바텀시트 컴포넌트
// 사용자가 선택한 날짜 Day1과 같은 방식으로 selectedDates로 전달받아야 함

// 음.. Date로 관리하는게 나을까 Day 로 관리하는게 나을까?

export interface DatePickButtonSheetProps {
  tripDate?: string[];
  selectedIndex: number | null;
  setSelectedIndex: (idx: number) => void;
  onClose?: () => void; // 모달 닫기용 콜백 추가
}

export default function DatePickButtonSheet({
  tripDate,
  selectedIndex,
  setSelectedIndex,
  onClose,
}: DatePickButtonSheetProps) {
  return (
    <div className="flex w-full flex-col justify-start">
      {tripDate?.map((date, idx) => (
        <button
          className="flex w-full gap-1 justify-start py-3 cursor-pointer"
          key={idx}
          onClick={() => {
            setSelectedIndex(idx);
            if (onClose) onClose(); // 클릭 시 모달 닫기
          }}
        >
          <Image src={selectedIndex === idx ? CheckedIcon : unCheckedIcon} alt="Check Icon" />
          <span className={selectedIndex === idx ? 'text-primary' : 'text-grey-1000'}>{date}</span>
        </button>
      ))}
    </div>
  );
}
