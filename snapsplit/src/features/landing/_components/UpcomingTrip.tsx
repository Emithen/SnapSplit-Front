const UpcomingTrip = () => {
  return (
    <section className="flex flex-col w-full p-4 rounded-b-3xl">
      <span className="text-label-1">다가오는 여행</span>
      <div className="flex p-4 justify-between">
        <div className="flex flex-col">
          <span className="text-label-1">스냅스플릿 연구팟</span>
          <div className="text-caption-1 text-grey-550">
            <span>런던, 파리, 취리히</span>
            <span>2025.4.7 - 4.12</span>
          </div>
        </div>
        <button className="flex-auto py-2 justify-center items-center rounded-xl text-body-1 bg-grey-650 text-grey-50">
          D-3
        </button>
      </div>
    </section>
  );
};

export default UpcomingTrip;
