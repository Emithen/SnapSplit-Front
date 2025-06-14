const TotalExpenseBottomSheet = () => {
  return (
    <div className="self-stretch px-2.5 pt-0.5 pb-4 bg-neutral-500 shadow-[0px_-2px_10px_0px_rgba(108,108,108,0.12)] inline-flex flex-col justify-center items-center">
      <div className="w-6 h-6 flex flex-col justify-center items-center overflow-hidden">
        <div className="w-3.5 h-1.5 origin-top-left -rotate-180 outline outline-[1.50px] outline-offset-[-0.75px] outline-neutral-400" />
      </div>
      <div className="justify-start text-neutral-50 text-lg font-semibold font-['Pretendard'] leading-relaxed">
        총 124,500원 지출
      </div>
    </div>
  );
};

export default TotalExpenseBottomSheet;
