const SharedBudgetBar = () => {
  return (
    <div className="flex w-full px-5 pb-5">
      <div className="flex w-full flex-row items-center rounded-xl justify-between bg-grey-650 px-[14px] py-3  text-body-2">
        <p className="text-stone-300">공동경비 잔액</p>
        <p className="text-grey-650 px-3 py-[6px] bg-grey-50 rounded-lg">경비 추가하기</p>
      </div>
    </div>
  );
};

export default SharedBudgetBar;
