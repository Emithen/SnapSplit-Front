import SearchBar from '@/shared/components/SearchBar';
import TripImageUploader from '@trip/createTrip/steps/Step4_InputTripName/TripImageUploader';
import BottomCTAButton from '@/shared/components/BottomCTAButton';
import { SearchBarType } from '@/shared/types/ui';
import { InputTripNameSectionProps } from './type';

const InputTripNameSection = ({ onClick: onNext }: InputTripNameSectionProps) => {
  return (
    <div className="px-5 flex flex-col justify-between" style={{ height: 'calc(100vh - 95px - 16px)' }}>
      <div className="flex flex-col">
        <div className="pb-6">
          <p className="text-head-1">
            여행명을 설정하고
            <br />
            대표사진을 추가해보세요
          </p>
        </div>
        <TripImageUploader />
        <SearchBar type={SearchBarType.WithoutIcon} placeholder="여행명을 입력해주세요" />
      </div>
      <BottomCTAButton label="다음으로" onClick={onNext} />
    </div>
  );
};

export default InputTripNameSection;
