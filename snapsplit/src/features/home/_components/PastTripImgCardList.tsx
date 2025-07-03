'use client';

import { useDragScroll } from '@/shared/utils/useDragScroll';

type PastTripCardProp = {
  tripName: string;
  tripDate: string;
};

const PastTripCard = ({ tripName, tripDate }: PastTripCardProp) => {
  return (
    <div className="flex-shrink-0 flex flex-col justify-center items-center bg-white rounded-2xl w-52 h-[262px] mr-4">
      <div className="bg-grey-250 rounded-2xl w-[184px] h-[184px] mb-3"></div> {/* 여행 이미지 */}
      <p className="text-body-1">{tripName}</p>
      <p className="text-body-2 text-grey-550">{tripDate}</p>
    </div>
  );
};

const PastTripImgCardList = () => {
  const { scrollRef, onMouseDown, onMouseMove, onMouseUp } = useDragScroll('x');

  const tripList = [
    { tripName: '대만', tripDate: '2025.05.25' },
    { tripName: '일본', tripDate: '2024.12.20' },
    { tripName: '태국', tripDate: '2024.10.10' },
    { tripName: '프랑스', tripDate: '2024.08.15' },
  ];

  return (
    <div className="flex flex-col gap-3 pl-5 py-6">
      <label className="text-title-1">지난 여행을 추억해봐요!</label>
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="flex overflow-x-auto scrollbar-hide"
      >
        {tripList.map((trip, index) => (
          <PastTripCard key={index} tripName={trip.tripName} tripDate={trip.tripDate} />
        ))}
      </div>
    </div>
  );
};

export default PastTripImgCardList;
