'use client';
import { motion } from 'framer-motion';

const StepProgressBar = ({ step }: { step: number }) => {
  return (
    <div className="flex gap-1 pt-[18px] pb-6 px-5">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ backgroundColor: '#D1D1D1' }} // grey-350
          animate={{ backgroundColor: i <= step ? '#1F1F1F' : '#D1D1D1' }} // grey-850 or grey-350
          transition={{ duration: 0.3 }}
          className="h-1 flex-1 rounded"
        />
      ))}
    </div>
  );
};

export default StepProgressBar;
