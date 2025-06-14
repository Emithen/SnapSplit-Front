import { TripDateFilterBarProps } from '../type';
import Image from 'next/image';
import search from '@public/svg/search.svg';
import { getDateRangeArray } from '@/shared/utils/makeDateList';
import { getKoreanDay } from '@/shared/utils/getKoreanDay';

const TripDateFilterBar = ({ startDate, endDate }: TripDateFilterBarProps) => {
  const dateList = getDateRangeArray(startDate, endDate);

  return (
    <div className="w-full pl-5 inline-flex items-center whitespace-nowrap overflow-hidden">
      {/* '전체' 탭 */}
      <div className="flex shrink-0 items-center">
        <p className="px-[11.5px] py-[21.5px] bg-grey-650 rounded-tl-xl rounded-tr-xl text-white shrink-0">전체</p>
        <div className="flex flex-col px-3 py-[10px] items-center justify-center text-grey-550">
          <p className="text-caption-2">준비</p>
          <Image alt="search" src={search} />
        </div>
      </div>
      <div className="flex overflow-x-auto scrollbar-hide">
        {/* 날짜 탭 리스트 */}
        {dateList.map((date) => (
          <div
            key={date.format('YYYY-MM-DD')}
            className="flex flex-col max-w-12 min-w-12 py-[10px] items-center justify-center text-grey-550 shrink-0"
          >
            <p className="text-caption-2">{getKoreanDay(date)}</p>
            <p className="text-body-2">{date.date()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripDateFilterBar;
