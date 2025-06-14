import SearchBar from '@/shared/components/SearchBar';
import { motion } from 'framer-motion';

type AddMemberSectionProps = { onNext: () => void };

const AddMemberSection = ({ onNext }: AddMemberSectionProps) => {
  return (
    <div className="flex flex-col justify-between px-5" style={{ height: 'calc(100vh - 95px - 16px)' }}>
      <div className="flex flex-col">
        <div className="pb-6">
          <p className="text-head-1">
            함께 여행하는
            <br />
            동행이 있다면 추가해주세요
          </p>
          <p className="text-body-2 text-grey-850">동행은 나중에 다시 추가할 수 있어요</p>
        </div>
        <SearchBar placeholder="사용자코드를 입력해주세요" />
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

export default AddMemberSection;
