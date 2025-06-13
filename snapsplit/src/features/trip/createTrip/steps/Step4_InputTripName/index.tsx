import SearchBar from '../../_components/SearchBar';
import TripImageUploader from './TripImageUploader';

const InputTripName = () => {
  return (
    <div className="px-5">
      <div className="pb-6">
        <p className="text-head-1">
          여행명을 설정하고
          <br />
          대표사진을 추가해보세요
        </p>
      </div>
      <TripImageUploader />
      <SearchBar placeholder="여행명을 입력해주세요" />
    </div>
  );
};

export default InputTripName;
