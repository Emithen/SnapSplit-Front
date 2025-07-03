import devider from '@public/svg/devider.svg';
import Image from 'next/image';
import { TripInfoProps } from '../type';

const TripInfo = ({ tripName, countries, startDate, endDate }: TripInfoProps) => {
  return (
    <div className="flex flex-col p-5 pt-0 gap-1 pb-4">
      <div className="flex flex-row space-x-3 items-center">
        <p className="text-grey-850 text-head-0">{tripName}</p>
      </div>
      <div className="flex flex-row gap-2 items-center text-grey-650">
        {/* <p className="text-body-2">{memberCount}명</p> */}
        <p className="text-body-2">
          {startDate} - {endDate}
        </p>
        <Image alt="|" src={devider} />
        <p className="text-body-2">{countries.map((c) => c.countryName).join(', ')}</p>
      </div>
    </div>
  );
};

export default TripInfo;
