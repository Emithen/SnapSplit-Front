'use client';

import { useState } from 'react';
import FullExpenseModal from './FullExpenseModal';
import { AnimatePresence } from 'framer-motion';

const BottomSheetTrigger = ({ total }: { total: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="mb-10 fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[415px] min-w-[360px] bg-neutral-500 text-white py-4 text-center z-50"
        onClick={() => setOpen(true)}
      >
        총 {total.toLocaleString()}원 지출 ↑
      </div>

      <AnimatePresence>{open && <FullExpenseModal onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
};

export default BottomSheetTrigger;
