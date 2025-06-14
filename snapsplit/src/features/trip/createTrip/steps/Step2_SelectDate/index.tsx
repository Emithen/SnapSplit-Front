import { motion } from 'framer-motion';

type SelectDateSectionProps = { onNext: () => void };

const SelectDateSection = ({ onNext }: SelectDateSectionProps) => {
  return (
    <div className="flex flex-col justify-between px-5" style={{ height: 'calc(100vh - 95px - 16px)' }}>
      <div className="pb-6">
        <p className="text-head-1">여행 일정을 등록해주세요</p>
        <p className="text-body-2 text-grey-850">캘린더에서 떠나는 날과 돌아오는 날을 선택하세요</p>
      </div>
      <motion.button
        onClick={onNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="flex w-full p-3 bg-neutral-500 rounded-xl shadow-[0px_-2px_10px_0px_rgba(108,108,108,0.12)] justify-center items-center text-label-1 text-neutral-50"
      >
        다음으로
      </motion.button>
    </div>
  );
};

export default SelectDateSection;
