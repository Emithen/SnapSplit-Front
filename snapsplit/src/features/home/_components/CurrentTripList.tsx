const CurrentTriplist = () => {
  return (
    <div className="flex items-center p-[1px] rounded-[12px] bg-gradient-to-br from-primary to-transparent">
      <div className="flex items-center w-full rounded-[12px] bg-[#41D59626]">
        <div className="flex flex-col w-full gap-1 bg-bg_green rounded-[11px] p-4">
          <div className="flex gap-[6px]">
            <div className="flex px-2 py-[2px] rounded-[40px] bg-primary text-white text-body-1">D-2</div>
            <p className="text-label-1">스냅스플릿 연구팟</p>
          </div>
          <div className="text-caption-1 text-grey-550">2025. 12. 22 - 2025. 12. 22 | 런던, 파리, 취리히</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTriplist;
