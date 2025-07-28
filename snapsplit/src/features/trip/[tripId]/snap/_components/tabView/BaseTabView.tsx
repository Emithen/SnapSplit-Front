'use client';

import { useState, useRef } from 'react';
import SortFilterBar from '@/features/trip/[tripId]/snap/_components/sortFilterBar/SortFilterBar';
import PhotoGrid from '@/features/trip/[tripId]/snap/_components/PhotoGrid';
import SortBottomSheet from '@/features/trip/[tripId]/snap/_components/SortBottomSheet';
import FilterBottomSheet from '@/features/trip/[tripId]/snap/_components/fiterBottomSheet/FilterBottomSheet';
import { FilterState } from '@/features/trip/[tripId]/snap/type';
import { useEffect } from 'react';
import BottomSheet from '@/shared/components/bottom-sheet/BottomSheet';
import { mockPhotos } from '@/shared/mock/Photos';

// 테스트 데이터
const testImages = mockPhotos;

type BaseTabViewProps = {
  setIsScrolled: (show: boolean) => void;
  setScrollToTop: (fn: () => void) => void;
};

export default function BaseTabView({ setIsScrolled, setScrollToTop }: BaseTabViewProps) {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('최신순');
  const [filters, setFilters] = useState<FilterState>({
    days: [],
    people: [],
    locations: [],
  });

  const scrollRef = useRef<HTMLDivElement>(null);

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
      setIsScrolled(el.scrollTop > 100);
    };
    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef, setIsScrolled]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 flex flex-col px-5 pb-5 h-full overflow-y-auto scrollbar-hide scrollbar-hide::-webkit-scrollbar bg-light_grey"
    >
      <SortFilterBar
        selectedSort={selectedSort}
        onSortOpen={() => {
          setSortOpen(true);
          console.log('sortOpen');
        }}
        onFilterOpen={() => setFilterOpen(true)}
        filters={filters}
        setFilters={setFilters}
      />

      {/* 상단 여백: 필터 태그가 있는 경우 108px, 없는 경우 64px */}
      <div className={filters.days.length > 0 || filters.people.length > 0 || filters.locations.length > 0 ? "min-h-27" : "min-h-16"}/>

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
          <FilterBottomSheet filters={filters} setFilters={setFilters} onClose={() => setFilterOpen(false)} tab="base" />
        </BottomSheet>
      )}
    </div>
  );
}
