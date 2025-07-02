const PastTripCard = ({ tripName, tripDate }: PastTripCardProp) => {
  return (
    <div className="flex flex-col space-y-3 pl-5">
      <label className="text-title-1">지난 여행을 추억해봐요!</label>
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl w-52 h-[262px]">
        <div className="bg-grey-250 rounded-2xl  w-[184px] h-[184px] mb-3"></div> {/* 여행 이미지 */}
        <p className="text-body-1"> {tripName} </p>
        <p className="text-body-2 text-grey-550"> {tripDate}</p>
      </div>
    </div>
  );
};

const PastTripList = ({ tripName, tripStartDate, tripEndDate, numOfTripMember }: PastTripListProps) => {
  return (
    <section className="p-4 flex justify-between bg-white rounded-[20px]">
      <div className="flex flex-row gap-3">
        <div className="w-10 h-10 bg-grey-350 rounded-xl"></div> {/* 여행 이미지 */}
        <div className="flex-col text-body-1">
          {/* 여행지, 여행인원, 여행날짜 */}
          <p>{tripName}</p>
          <div className="flex flex-row text-grey-550 text-caption-1">
            <p>{numOfTripMember}명</p>
            <p>
              {tripStartDate}-{tripEndDate}
            </p>
          </div>
        </div>
      </div>
      <div>다음</div>
    </section>
  );
};

const PastTripSection = () => {
  return (
    <section className="flex flex-col pt-6">
      <PastTripCard tripName="대만" tripDate="2024.6.5" />
      <section className="p-5 ">
        <PastTripList numOfTripMember={4} tripEndDate="4.12" tripName="도쿄, 오사카" tripStartDate="2025.4.7" />
      </section>
    </section>
  );
};

export default PastTripSection;
