const DailyExpenseList = () => {
  return (
    <div className="self-stretch px-5 inline-flex flex-col justify-start items-start gap-3">
      <div className="self-stretch inline-flex justify-start items-center gap-2">
        <div className="justify-start text-neutral-700 text-sm font-semibold font-['Pretendard'] leading-tight">
          Day 1
        </div>
        <div className="w-0 h-3.5 outline-1 outline-offset-[-0.50px] outline-neutral-200" />
        <div className="justify-start text-neutral-400 text-sm font-semibold font-['Pretendard'] leading-tight">
          4.7/월
        </div>
      </div>
      <div className="w-80 h-9 rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex justify-center items-center">
        <div className="justify-start text-neutral-500 text-sm font-semibold font-['Pretendard'] leading-tight">
          지출 추가
        </div>
      </div>
    </div>
  );
};

export default DailyExpenseList;
