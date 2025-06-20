'use client';

import { useState } from 'react';
import SortFilterBar from '../SortFilterBar';
import PhotoGrid from '../PhotoGrid';
import { UploadedImage } from '../../type';
import SortBottomSheet from '../SortBottomSheet';
import FilterBottomSheet from '../FilterBottomSheet';
import { FilterState } from '../../type';

{/* 테스트 데이터 */}
const testImages: UploadedImage[] = [
  {
    id: '1-jisu-london',
    src: '/svg/1-jisu-london.png',
    tags: {
      days: [1],
      people: ['지수'],
      locations: ['런던']
    }
  },
  {
    id: '2-jisu-na-yeon-paris',
    src: '/svg/2-jisu-na-yeon-paris.png',
    tags: {
      days: [2],
      people: ['지수', '나경', '연수'],
      locations: ['파리']
    }
  }
];

export default function BaseTabView() {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('최신순');
  const [filters, setFilters] = useState<FilterState>({
    days: [],
    people: [],
    locations: [],
  });
  
  const filteredImages = testImages.filter((img) => {
    const matchDay = filters.days.length === 0 || filters.days.some((d) => img.tags.days.includes(d));
    const matchPeople = filters.people.length === 0 || filters.people.some((p) => img.tags.people.includes(p));
    const matchLocation = filters.locations.length === 0 || filters.locations.some((l) => img.tags.locations.includes(l));
    return matchDay && matchPeople && matchLocation;
  });

  return (
    <div className="p-5">
      <SortFilterBar
        selectedSort={selectedSort}
        onSortOpen={() => setSortOpen(true)}
        onFilterOpen={() => setFilterOpen(true)}
      />
      <div className="flex flex-wrap gap-2 px-4 py-3">
        {filters.days.map((day: number) => (
          <span key={day} className="bg-grey-350 px-3 py-1 rounded-full text-xs text-white">
            Day {day}
          </span>
        ))}
        {filters.people.map((name: string) => (
          <span key={name} className="bg-grey-350 px-3 py-1 rounded-full text-xs text-white">
            {name}
          </span>
        ))}
        {filters.locations.map((loc: string) => (
          <span key={loc} className="bg-grey-350 px-3 py-1 rounded-full text-xs text-white">
            {loc}
          </span>
        ))}
      </div>
      <PhotoGrid images={filteredImages} />

      {sortOpen && (
        <div className="fixed inset-0 z-100">
          {/* 어두운 배경 */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setSortOpen(false)}
          />
          {/* 정렬 bottom sheet */}
          <SortBottomSheet
            selectedSort={selectedSort}
            onSelectSort={(opt) => setSelectedSort(opt)}
            onClose={() => setSortOpen(false)}
          />
        </div>
      )}
      {filterOpen && (
        <div className="fixed inset-0 z-100">
          {/* 어두운 배경 */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setFilterOpen(false)}
          />
          {/* 필터 bottom sheet */}
          <FilterBottomSheet
            filters={filters}
            setFilters={setFilters}
            onClose={() => setFilterOpen(false)}
          />
        </div>
      )}
      {/* 컨텐츠 영역 */}

    </div>
  );
}
