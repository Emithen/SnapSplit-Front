const SharedBudgetBar = () => {
  return (
    <div className="w-80 px-3.5 py-3 bg-neutral-500 rounded-xl inline-flex justify-between items-center">
      <div className="justify-start text-stone-300 text-sm font-semibold font-['Pretendard'] leading-relaxed">
        공동경비 잔액
      </div>
      <div className="px-3 py-1.5 bg-neutral-50 rounded-lg flex justify-center items-center gap-2.5">
        <div className="justify-start text-neutral-500 text-sm font-semibold font-['Pretendard'] leading-tight">
          경비 추가하기
        </div>
      </div>
    </div>
  );
};

export default SharedBudgetBar;
