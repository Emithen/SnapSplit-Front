'use client';
import { useState, useRef } from 'react';
import TabSelector from './_components/TabSelector';
import SortFilterBar from './_components/SortFilterBar';
import PhotoGrid from './_components/PhotoGrid';
import UploadButton from './_components/UploadButton';
import SortBottomSheet from './_components/SortBottomSheet';
import FilterBottomSheet from './_components/FilterBottomSheet';
import BottomNavBar from '@/shared/components/BottomNavBar';
import TripHeader from '@/features/trip/[tripId]/_components/TripHeader';
import TripInfo from '@/features/trip/[tripId]/_components/TripInfo';
import { FilterState } from '@/features/snap/type';

export default function GalleryPage() {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('최신순');
  const [filters, setFilters] = useState<FilterState>({
    days: [],
    people: [],
    locations: [],
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 테스트 데이터
  const countries = [
    { countryId: 1, countryName: '런던' },
    { countryId: 2, countryName: '파리' },
    { countryId: 3, countryName: '취리히' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="bg-grey-350">
        <TripHeader />
        <TripInfo
          tripName={'유luv여행'}
          countries={countries}
          memberCount={4}
          startDate={'2025.4.7'}
          endDate={'4.12'}
        />
      </div>
      <TabSelector />
      <SortFilterBar
        selectedSort={selectedSort}
        onSortOpen={() => setSortOpen(true)}
        onFilterOpen={() => setFilterOpen(true)}
      />
      <div className="flex flex-wrap gap-2 px-4 py-3">
        {filters.days.map((day) => (
          <span key={day} className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-700">
            Day {day}
          </span>
        ))}
        {filters.people.map((name) => (
          <span key={name} className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-700">
            {name}
          </span>
        ))}
        {filters.locations.map((loc) => (
          <span key={loc} className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-700">
            {loc}
          </span>
        ))}
      </div>

      <PhotoGrid />
      <UploadButton inputRef={fileInputRef} />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) alert(`파일 선택됨: ${file.name}`);
        }}
      />
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
            onSelect={(opt) => {
              setSelectedSort(opt);
              setSortOpen(false);
            }}
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
      <BottomNavBar />
    </div>
  );
}
