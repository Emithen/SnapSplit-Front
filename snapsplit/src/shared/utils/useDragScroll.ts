// 마우스 드래그 커스텀 훅
import { useRef } from 'react';

type ScrollDirection = 'x' | 'y';

export const useDragScroll = (direction: ScrollDirection = 'x', onScrollChange?: (scroll: number) => void) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const start = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    start.current =
      direction === 'x'
        ? e.pageX - (scrollRef.current?.offsetLeft || 0)
        : e.pageY - (scrollRef.current?.offsetTop || 0);
    scrollStart.current = direction === 'x' ? scrollRef.current?.scrollLeft || 0 : scrollRef.current?.scrollTop || 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const current = direction === 'x' ? e.pageX - scrollRef.current.offsetLeft : e.pageY - scrollRef.current.offsetTop;
    const walk = current - start.current;
    if (direction === 'x') {
      scrollRef.current.scrollLeft = scrollStart.current - walk;
    } else {
      scrollRef.current.scrollTop = scrollStart.current - walk;
    }

    if (onScrollChange) {
      onScrollChange(scrollRef.current?.scrollLeft || scrollRef.current?.scrollTop || 0);
    }
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  return {
    scrollRef,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};
