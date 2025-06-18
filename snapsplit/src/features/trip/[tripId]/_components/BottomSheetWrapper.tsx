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
    const offsetY = info.offset.y; // 얼마나 움직였는지
    const velocityY = info.velocity.y; // 드래그 속도
    const screenHeight = window.innerHeight;

    const draggedRatio = Math.abs(offsetY) / screenHeight;

    const shouldOpen = offsetY < 0 && draggedRatio > 0.1; // 위로 충분히 올린 경우
    const shouldClose = offsetY > 0 || velocityY > 500; // 아래로 내리거나 빠르게 튕긴 경우

    if (shouldOpen) {
      animate(y, dragRange.top, { type: 'spring', stiffness: 300 });
    } else if (shouldClose) {
      animate(y, 0, { type: 'spring', stiffness: 300 });
    } else {
      // 작은 흔들림이면 유지
      const currentY = y.get();
      animate(y, currentY, { type: 'spring', stiffness: 300 });
    }
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={dragRange}
      style={{ y }}
      onDragEnd={handleDragEnd}
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[415px] min-w-[360px] z-50 touch-none"
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
};

export default BottomSheetWrapper;
