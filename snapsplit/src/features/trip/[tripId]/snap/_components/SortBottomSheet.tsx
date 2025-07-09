'use client';

import { motion, useMotionValue, useDragControls, animate } from 'framer-motion';
import Image from 'next/image';

interface SortBottomSheetProps {
  selectedSort: string;
  onSelectSort: (option: string) => void;
  onClose: () => void;
}

// 테스트 데이터
const sortOptions = ['최신순', '이름순', '좋아요순'];

export default function SortBottomSheet({ selectedSort, onSelectSort, onClose }: SortBottomSheetProps) {
  const y = useMotionValue(0);
  const controls = useDragControls();

  const animateAndClose = async () => {
    await animate(y, 500, { type: 'tween', duration: 0.2, ease: 'easeIn' });

    if (onClose) {
      onClose();
    }
  };
  return (
    <motion.div
      style={{ y }}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="w-full bg-white rounded-t-[20px] px-5 pb-8 flex flex-col items-center justify-center"
      drag="y"
      dragListener={false}
      dragControls={controls}
      onDrag={(e, info) => {
        if (info.offset.y > 0) {
          // 하단 스크롤만 가능
          y.set(info.offset.y);
        } else {
          // 상단 스크롤 제한
          y.set(0);
        }
      }}
      onDragEnd={() => {
        const currentY = y.get();
        if (currentY > 10) {
          animateAndClose();
        } else {
          animate(y, 0, { type: 'spring', stiffness: 300, damping: 30 });
        }
      }}
    >
      <div
        className="flex w-full flex-1 justify-center py-3 cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => controls.start(e)}
      ></div>
      <div className="text-title-1">정렬</div>
      <ul className="space-y-4 pt-5">
        {sortOptions.map((option) => (
          <button
            key={option}
            onClick={() => {
              onSelectSort(option);
              onClose();
            }}
            className="flex items-center cursor-pointer"
          >
            <span>
              {selectedSort === option ? (
                <Image src="/svg/check_black.svg" alt="check" width={24} height={24} unoptimized />
              ) : (
                <Image src="/svg/check_grey.svg" alt="check" width={24} height={24} unoptimized />
              )}
            </span>
            <span className="text-body-2 pl-0.5">{option}</span>
          </button>
        ))}
      </ul>
    </motion.div>
  );
}
