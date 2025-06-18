'use client';

import { useRef, useState, useEffect } from 'react';
import { useMotionValue, animate, motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const BottomSheetWrapper = ({ children }: Props) => {
  const y = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragRange, setDragRange] = useState({ top: -300, bottom: 0 }); // 초기값은 임의로 세팅

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const height = window.innerHeight;
      const topLimit = -height * 0.7; // 위로 최대 70% 까지 올리게
      setDragRange({ top: topLimit, bottom: 0 });

      // 바텀시트 초기 위치 세팅
      y.set(0); // 시작 위치가 0이 아니라면 조정 가능
    }
  }, [y]);

  const handleDragEnd = (_: any, info: any) => {
    const offsetY = info.offset.y;
    const velocityY = info.velocity.y;
    const screenHeight = window.innerHeight;

    const draggedRatio = Math.abs(offsetY) / screenHeight;

    const shouldOpen = offsetY < 0 && draggedRatio > 0.1;
    const shouldClose = offsetY > 0 && (draggedRatio > 0.1 || velocityY > 500);

    if (shouldOpen) {
      animate(y, dragRange.top, { type: 'spring', stiffness: 300 });
    } else {
      // 나머지는 모두 닫힘 (이전 상태 유지 X)
      animate(y, 0, { type: 'spring', stiffness: 300 });
    }
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={dragRange}
      style={{ y }}
      onDragEnd={handleDragEnd}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[415px] min-w-[360px] lg:max-w-[360px] pb-[58px] mx-auto z-50 touch-none"
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
};

export default BottomSheetWrapper;
