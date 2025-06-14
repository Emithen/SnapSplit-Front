import SearchBar from '@/shared/components/SearchBar';
import { SearchBarType } from '@trip/createTrip/type';
import TripImageUploader from '@trip/createTrip/steps/Step4_InputTripName/TripImageUploader';
import { motion } from 'framer-motion';

type InputTripNameProps = { onNext: () => void };

const InputTripName = ({ onNext }: InputTripNameProps) => {
  return (
    <div className="px-5 flex flex-col justify-between" style={{ height: 'calc(100vh - 95px - 16px)' }}>
      <div className="flex flex-col">
        <div className="pb-6">
          <p className="text-head-1">
            여행명을 설정하고
            <br />
            대표사진을 추가해보세요
          </p>
        </div>
        <TripImageUploader />
        <SearchBar type={SearchBarType.WithoutIcon} placeholder="여행명을 입력해주세요" />
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

export default InputTripName;
