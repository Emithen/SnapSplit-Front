'use client';

import { useState } from 'react';
import SortFilterBar from '@/features/trip/[tripId]/snap/_components/sortFilterBar/SortFilterBar';
import PhotoGrid from '@/features/trip/[tripId]/snap/_components/PhotoGrid';
import { UploadedImage } from '@/features/trip/[tripId]/snap/type';
import SortBottomSheet from '@/features/trip/[tripId]/snap/_components/SortBottomSheet';
import FilterBottomSheet from '@/features/trip/[tripId]/snap/_components/fiterBottomSheet/FilterBottomSheet';
import { FilterState } from '@/features/trip/[tripId]/snap/type';
import { useDragScroll } from '@/shared/utils/useDragScroll';
import { useEffect } from 'react';
import BottomSheet from '@/shared/components/bottom-sheet/BottomSheet';

// 테스트 데이터
const testImages: UploadedImage[] = [
  {
    id: '1-jisu-london',
    src: '/svg/1-jisu-london.png',
    tags: {
      days: [1],
      people: ['지수'],
      locations: ['런던'],
    },
  },
  {
    id: '2-jisu-na-yeon-paris',
    src: '/svg/2-jisu-na-yeon-paris.png',
    tags: {
      days: [2],
      people: ['지수', '나경', '연수'],
      locations: ['파리'],
    },
  },
];

type BaseTabViewProps = {
  setShowTopButton: (show: boolean) => void;
  setScrollToTop: (fn: () => void) => void;
};

export default function BaseTabView({ setShowTopButton, setScrollToTop }: BaseTabViewProps) {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('최신순');
  const [filters, setFilters] = useState<FilterState>({
    days: [],
    people: [],
    locations: [],
  });

  const {
    scrollRef,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
  } = useDragScroll('y');

  const filteredImages = testImages.filter((img) => {
    const matchDay = filters.days.length === 0 || filters.days.some((d) => img.tags.days.includes(d));
    const matchPeople = filters.people.length === 0 || filters.people.some((p) => img.tags.people.includes(p));
    const matchLocation =
      filters.locations.length === 0 || filters.locations.some((l) => img.tags.locations.includes(l));
    return matchDay && matchPeople && matchLocation;
  });

  // 탑 버튼 이벤트 설정
  useEffect(() => {
    if (!scrollRef.current) return;
    const scrollToTop = () => {
      scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };
    setScrollToTop(() => scrollToTop);
  }, [scrollRef, setScrollToTop]);

  // 브라우저에서 스크롤 이벤트 직접 감지
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setShowTopButton(el.scrollTop > 100);
    };
    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef, setShowTopButton]);

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchCancel}
      className="flex-1 flex flex-col px-5 pb-5 gap-5 h-full overflow-y-auto scrollbar-hide scrollbar-hide::-webkit-scrollbar bg-light_grey"
    >
      <SortFilterBar
        selectedSort={selectedSort}
        onSortOpen={() => {
          setSortOpen(true);
          console.log('sortOpen');
        }}
        onFilterOpen={() => setFilterOpen(true)}
        filters={filters}
      />

      <PhotoGrid images={filteredImages} />

      {sortOpen && (
        <BottomSheet isOpen={sortOpen} onClose={() => setSortOpen(false)}>
          <SortBottomSheet
            selectedSort={selectedSort}
            onSelectSort={(opt) => setSelectedSort(opt)}
            onClose={() => setSortOpen(false)}
          />
        </BottomSheet>
      )}

      {filterOpen && (
        <BottomSheet isOpen={filterOpen} onClose={() => setFilterOpen(false)}>
          <FilterBottomSheet filters={filters} setFilters={setFilters} onClose={() => setFilterOpen(false)} />
        </BottomSheet>
      )}
    </div>
  );
}
