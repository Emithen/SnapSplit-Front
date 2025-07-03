'use client';

import { useDragScroll } from '@/shared/utils/useDragScroll'; // 아까 보낸 훅 가져오기

type CurrentTripItemProps = {
  dDay: string;
  title: string;
  dateRange: string;
  locations: string;
};

const CurrentTripItem = ({ dDay, title, dateRange, locations }: CurrentTripItemProps) => {
  return (
    <div className="flex-shrink-0 flex items-center p-[1px] rounded-[12px] bg-gradient-to-br from-primary to-transparent w-[296px] mr-2">
      <div className="flex items-center w-full rounded-[12px] bg-[#41D59626]">
        <div className="flex flex-col w-full gap-1 bg-bg_green rounded-[11px] p-4">
          <div className="flex gap-[6px]">
            <div className="flex px-2 py-[2px] rounded-[40px] bg-primary text-white text-body-1">{dDay}</div>
            <p className="text-label-1">{title}</p>
          </div>
          <div className="text-caption-1 text-grey-550">
            {dateRange} | {locations}
          </div>
        </div>
      </div>
    </div>
  );
};

const CurrentTripList = () => {
  const trips: CurrentTripItemProps[] = [
    {
      dDay: 'D-2',
      title: '스냅스플릿 연구팟',
      dateRange: '2025. 12. 22 - 2025. 12. 22',
      locations: '런던, 파리, 취리히',
    },
    {
      dDay: 'D-10',
      title: '팀 워크샵',
      dateRange: '2026. 1. 10 - 2026. 1. 20',
      locations: '도쿄, 오사카',
    },
    {
      dDay: 'D-30',
      title: '겨울 촬영',
      dateRange: '2026. 2. 5 - 2026. 2. 15',
      locations: '뉴욕, 보스턴',
    },
  ];

  const { scrollRef, onMouseDown, onMouseMove, onMouseUp } = useDragScroll('x');

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      className="flex overflow-x-auto scrollbar-hide px-8"
    >
      {trips.map((trip, index) => (
        <CurrentTripItem
          key={index}
          dDay={trip.dDay}
          title={trip.title}
          dateRange={trip.dateRange}
          locations={trip.locations}
        />
      ))}
    </div>
  );
};

export default CurrentTripList;
