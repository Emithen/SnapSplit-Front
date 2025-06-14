const TripDateFilterBar = () => {
  return (
    <div className="pl-5 inline-flex justify-center items-center">
      <div className="w-12 h-16 px-3.5 py-2.5 bg-neutral-500 rounded-tl-xl rounded-tr-xl inline-flex flex-col justify-center items-center gap-1">
        <div className="justify-start text-white text-sm font-medium font-['Pretendard'] leading-tight">전체</div>
      </div>
      <div className="w-12 h-16 px-3.5 py-2.5 inline-flex flex-col justify-between items-center">
        <div className="justify-start text-neutral-400 text-xs font-medium font-['Pretendard'] leading-none">준비</div>
        <div className="w-6 h-6 relative">
          <div className="w-4 h-4 left-[4.40px] top-[4.40px] absolute outline outline-2 outline-offset-[-1px] outline-neutral-400" />
        </div>
      </div>
      <div className="w-12 h-16 px-3.5 py-2.5 inline-flex flex-col justify-between items-center">
        <div className="justify-start text-neutral-400 text-xs font-medium font-['Pretendard'] leading-none">월</div>
        <div className="justify-start text-neutral-400 text-sm font-medium font-['Pretendard'] leading-tight">21</div>
      </div>
      <div className="w-12 h-16 px-3.5 py-2.5 inline-flex flex-col justify-between items-center">
        <div className="justify-start text-neutral-400 text-xs font-medium font-['Pretendard'] leading-none">화</div>
        <div className="justify-start text-neutral-400 text-sm font-medium font-['Pretendard'] leading-tight">22</div>
      </div>
      <div className="w-12 h-16 px-3.5 py-2.5 inline-flex flex-col justify-between items-center">
        <div className="justify-start text-neutral-400 text-xs font-medium font-['Pretendard'] leading-none">수</div>
        <div className="justify-start text-neutral-400 text-sm font-medium font-['Pretendard'] leading-tight">23</div>
      </div>
      <div className="w-12 h-16 px-3.5 py-2.5 inline-flex flex-col justify-between items-center">
        <div className="justify-start text-neutral-400 text-xs font-medium font-['Pretendard'] leading-none">목</div>
        <div className="justify-start text-neutral-400 text-sm font-medium font-['Pretendard'] leading-tight">24</div>
      </div>
      <div className="w-12 h-16 px-3.5 py-2.5 rounded-xl inline-flex flex-col justify-between items-center">
        <div className="justify-start text-neutral-400 text-xs font-medium font-['Pretendard'] leading-none">금</div>
        <div className="justify-start text-neutral-400 text-sm font-medium font-['Pretendard'] leading-tight">25</div>
      </div>
      <div className="w-12 h-16 px-3.5 py-2.5 inline-flex flex-col justify-between items-center">
        <div className="justify-start text-neutral-400 text-xs font-normal font-['Pretendard'] leading-none">토</div>
        <div className="justify-start text-neutral-400 text-sm font-medium font-['Pretendard'] leading-tight">26</div>
      </div>
    </div>
  );
};

export default TripDateFilterBar;
