'use client';
import { useState, useRef } from 'react';
import TopBar from './_components/TopBar';
import TabSelector from './_components/TabSelector';
import SortFilterBar from './_components/SortFilterBar';
import PhotoGrid from './_components/PhotoGrid';
import UploadButton from './_components/UploadButton';
import SortBottomSheet from './_components/SortBottomSheet';
import FilterBottomSheet from './_components/FilterBottomSheet';

export default function GalleryPage() {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('최신순');

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar />
      <TabSelector />
      <SortFilterBar
        selectedSort={selectedSort}
        onSortOpen={() => setSortOpen(true)}
        onFilterOpen={() => setFilterOpen(true)}
      />
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
        <SortBottomSheet
          selectedSort={selectedSort}
          onSelect={(opt) => {
            setSelectedSort(opt);
            setSortOpen(false);
          }}
        />
      )}
      {filterOpen && <FilterBottomSheet onClose={() => setFilterOpen(false)} />}
    </div>
  );
}
