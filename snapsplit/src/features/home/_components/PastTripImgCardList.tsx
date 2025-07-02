const PastTripCard = ({ tripName, tripDate }: PastTripCardProp) => {
  return (
    <div className="flex flex-col gap-3 pl-5 py-6">
      <label className="text-title-1">지난 여행을 추억해봐요!</label>
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl w-52 h-[262px]">
        <div className="bg-grey-250 rounded-2xl  w-[184px] h-[184px] mb-3"></div> {/* 여행 이미지 */}
        <p className="text-body-1"> {tripName} </p>
        <p className="text-body-2 text-grey-550"> {tripDate}</p>
      </div>
    </div>
  );
};

const PastTripImgCardList = () => {
  return <PastTripCard tripDate="2025.05.25" tripName="대만" />;
};

export default PastTripImgCardList;
