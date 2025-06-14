import BottomCTAButton from '@/shared/components/ui/BottomCTAButton';
import SearchBar from '@/shared/components/ui/SearchBar';

type AddMemberSectionProps = { onNext: () => void };

const AddMemberSection = ({ onNext }: AddMemberSectionProps) => {
  return (
    <div className="flex flex-col justify-between px-5" style={{ height: 'calc(100vh - 95px - 16px)' }}>
      <div className="flex flex-col">
        <div className="pb-6">
          <p className="text-head-1">
            함께 여행하는
            <br />
            동행이 있다면 추가해주세요
          </p>
          <p className="text-body-2 text-grey-850">동행은 나중에 다시 추가할 수 있어요</p>
        </div>
        <SearchBar placeholder="사용자코드를 입력해주세요" />
      </div>
      <BottomCTAButton label="다음으로" onClick={onNext} />
    </div>
  );
};

export default AddMemberSection;
