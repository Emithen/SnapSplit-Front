import Link from 'next/link';

const PastTripItem = ({ tripName, tripStartDate, tripEndDate }: PastTripListProps) => {
  return (
    <section className="space-x-[14px] py-4">
      <div className="flex flex-row gap-3">
        <div className="w-10 h-10 bg-grey-350 rounded-xl"></div> {/* 여행 이미지 */}
        <div className="flex flex-col text-body-1">
          <p>{tripName}</p>
          <div className="flex flex-row text-grey-550 text-caption-1">
            <p>
              {tripStartDate} - {tripEndDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AllPastTripList = () => {
  const pastTrips: PastTripListProps[] = [
    { tripName: '일본 여행', tripStartDate: '2025. 4. 7', tripEndDate: '2025. 4. 12' },
    { tripName: '프랑스 여행', tripStartDate: '2024. 8. 1', tripEndDate: '2024. 8. 10' },
    { tripName: '베트남 여행', tripStartDate: '2023. 12. 5', tripEndDate: '2023. 12. 15' },
  ];

  return (
    <div className="px-5">
      <section className="flex flex-col bg-white rounded-[20px] py-4 px-5">
        <div className="flex justify-between pb-1">
          <label className="text-label-1">이전 여행</label>
          <Link href="/home/past-trip" className="text-body-2 text-grey-550">
            전체보기
          </Link>
        </div>

        {pastTrips.map((trip, index) => (
          <PastTripItem
            key={index}
            tripName={trip.tripName}
            tripStartDate={trip.tripStartDate}
            tripEndDate={trip.tripEndDate}
          />
        ))}
      </section>
    </div>
  );
};

export default AllPastTripList;
