const BottomNavBar = () => {
  return (
    <div className="w-96 px-2.5 pt-3 pb-1 bg-white inline-flex justify-start items-center overflow-hidden">
      <div className="flex-1 inline-flex flex-col justify-start items-center">
        <div className="w-6 h-6 inline-flex justify-center items-center">
          <div className="w-3.5 h-4 outline outline-[1.50px] outline-offset-[-0.75px] outline-neutral-700" />
        </div>
        <div className="text-center justify-start text-neutral-700 text-xs font-medium font-['Pretendard'] leading-none">
          BUDGET
        </div>
      </div>
      <div className="flex-1 opacity-50 inline-flex flex-col justify-start items-center">
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <div className="w-4 h-4 outline outline-[1.50px] outline-offset-[-0.75px] outline-neutral-700" />
        </div>
        <div className="text-center justify-start text-neutral-700 text-xs font-medium font-['Pretendard'] leading-none">
          SNAP
        </div>
      </div>
      <div className="flex-1 opacity-50 inline-flex flex-col justify-start items-center">
        <div className="w-6 h-6 inline-flex justify-center items-center">
          <div className="w-4 h-4 outline outline-[1.50px] outline-offset-[-0.75px] outline-neutral-700" />
        </div>
        <div className="text-center justify-start text-neutral-700 text-xs font-medium font-['Pretendard'] leading-none">
          SPLIT
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
