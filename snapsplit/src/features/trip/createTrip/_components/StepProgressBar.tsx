const StepProgressBar = ({ step }: { step: number }) => {
  return (
    <div className="flex gap-1 pt-[18px] pb-6 px-5">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={`h-1 flex-1 rounded  ${i <= step ? 'bg-grey-850' : 'bg-grey-350'}`} />
      ))}
    </div>
  );
};

export default StepProgressBar;
