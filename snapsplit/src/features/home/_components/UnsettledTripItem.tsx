type UnsettledTripItemProps = {
  title: string;
  dateRange: string;
  locations: string;
};

const UnsettledTripItem = ({ title, dateRange, locations }: UnsettledTripItemProps) => {
  return (
    <div className="fixed min-w-[360px] max-w-[415px] lg:max-w-[360px] mx-auto bottom-3 w-full z-10 px-5">
      <div className="flex flex-col gap-1 w-full rounded-2xl p-5 pt-[18px] bg-grey-850">
        <div className="flex w-full gap-[6px] justify-between">
          <p className="text-label-1 text-white">{title}</p>
          <div className="flex px-3 py-[3px] rounded-[40px] bg-primary text-white text-body-1">정산하기</div>
        </div>
        <div className="text-caption-1 text-grey-550">
          {dateRange} | {locations}
        </div>
      </div>
    </div>
  );
};

export default UnsettledTripItem;
