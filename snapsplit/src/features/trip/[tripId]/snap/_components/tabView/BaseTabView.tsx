'use client';

import { useState } from 'react';
import SortFilterBar from '../sortFilterBar/SortFilterBar';
import PhotoGrid from '../PhotoGrid';
import { UploadedImage } from '../../type';
import SortBottomSheet from '../SortBottomSheet';
import FilterBottomSheet from '../fiterBottomSheet/FilterBottomSheet';
import { FilterState } from '../../type';
import Modal from '../Modal';

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
    <div className="flex flex-col p-5 gap-5">
      <SortFilterBar
        selectedSort={selectedSort}
        onSortOpen={() => setSortOpen(true)}
        onFilterOpen={() => setFilterOpen(true)}
        filters={filters}
      />

      <PhotoGrid images={filteredImages} />
      
      {sortOpen && (
        <Modal onClose={() => setSortOpen(false)}>
          <SortBottomSheet
            selectedSort={selectedSort}
            onSelectSort={(opt) => setSelectedSort(opt)}
            onClose={() => setSortOpen(false)}
          />
        </Modal>
      )}

      {filterOpen && (
        <Modal onClose={() => setFilterOpen(false)}>
          <FilterBottomSheet
            filters={filters}
            setFilters={setFilters}
            onClose={() => setFilterOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
