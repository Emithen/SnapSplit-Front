import BottomCTAButton from '@/shared/components/ui/BottomCTAButton';

type SelectDateSectionProps = { onNext: () => void };

const SelectDateSection = ({ onNext }: SelectDateSectionProps) => {
  return (
    <div className="flex flex-col justify-between px-5" style={{ height: 'calc(100vh - 95px - 16px)' }}>
      <div className="pb-6">
        <p className="text-head-1">여행 일정을 등록해주세요</p>
        <p className="text-body-2 text-grey-850">캘린더에서 떠나는 날과 돌아오는 날을 선택하세요</p>
      </div>
      <BottomCTAButton label="다음으로" onClick={onNext} />
    </div>
  );
};

export default SelectDateSection;
