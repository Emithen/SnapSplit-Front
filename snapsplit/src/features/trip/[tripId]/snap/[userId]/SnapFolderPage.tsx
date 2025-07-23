'use client';

import PhotoGrid from '@/features/trip/[tripId]/snap/_components/PhotoGrid';
import SnapFolderHeader from '@/features/trip/[tripId]/snap/_components/snapFolderModal/SnapFolderHeader';
import SnapFolderInfo from '@/features/trip/[tripId]/snap/_components/snapFolderModal/SnapFolderInfo';
import { UploadedImage } from '@/features/trip/[tripId]/snap/type';
import { useState } from 'react';
import { FilterState } from '@/features/trip/[tripId]/snap/type';
import FilterBottomSheet from '@/features/trip/[tripId]/snap/_components/fiterBottomSheet/FilterBottomSheet';
import { useRouter } from 'next/navigation';
import SortFilterBar from '@/features/trip/[tripId]/snap/_components/sortFilterBar/SortFilterBar';
import SortBottomSheet from '@/features/trip/[tripId]/snap/_components/SortBottomSheet';
import BottomSheet from '@/shared/components/bottom-sheet/BottomSheet';

// TODO: 사진 데이터 props로 전달
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

const SnapFolderPage = () => {
  const router = useRouter();
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    days: [],
    people: [],
    locations: [],
  });
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('최신순');

  return (
    <div className="flex flex-col w-full h-full bg-light_grey">
      <div className="flex flex-col bg-white">
        <SnapFolderHeader
          onClose={() => {
            router.back();
          }}
        />
        <SnapFolderInfo />
      </div>

      {/* GallerySection */}
      <div className="flex flex-col overflow-y-auto scrollbar-hide h-full px-5">
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

        <div
          className={
            filters.days.length > 0 || filters.people.length > 0 || filters.locations.length > 0
              ? 'min-h-27'
              : 'min-h-16'
          }
        />

        <PhotoGrid images={testImages} />

        {filterOpen && (
          <BottomSheet isOpen={filterOpen} onClose={() => setFilterOpen(false)}>
            <FilterBottomSheet filters={filters} setFilters={setFilters} onClose={() => setFilterOpen(false)} />
          </BottomSheet>
        )}

        {sortOpen && (
          <BottomSheet isOpen={sortOpen} onClose={() => setSortOpen(false)}>
            <SortBottomSheet
              selectedSort={selectedSort}
              onSelectSort={(opt) => setSelectedSort(opt)}
              onClose={() => setSortOpen(false)}
            />
          </BottomSheet>
        )}
      </div>
    </div>
  );
};

export default SnapFolderPage;
