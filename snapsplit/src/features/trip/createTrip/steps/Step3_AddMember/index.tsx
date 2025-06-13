import SearchBar from '@trip/createTrip/_components/SearchBar';

const AddMemberSection = () => {
  return (
    <div className="px-5">
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
  );
};

export default AddMemberSection;
