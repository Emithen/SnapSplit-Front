import PhotoGrid from '@/features/trip/[tripId]/snap/_components/PhotoGrid';
import FilterBar from './FilterBar';
import SnapFolderHeader from './SnapFolderHeader';
import SnapFolderInfo from './SnapFolderInfo';
import { UploadedImage } from '@/features/trip/[tripId]/snap/type';
import { useState } from 'react';
import { FilterState } from '@/features/trip/[tripId]/snap/type';
import OverlayModal from '@/shared/components/modal/OverlayModal';
import FilterBottomSheet from '@/features/trip/[tripId]/snap/_components/fiterBottomSheet/FilterBottomSheet';
import { useModalBackHandler } from '@/shared/utils/useModalBackHandler';

type SnapFolderModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

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

function SnapFolderModal({ isOpen, onClose }: SnapFolderModalProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    days: [],
    people: [],
    locations: [],
  });

  useModalBackHandler(isOpen, onClose);
  
  return (
    <div className="flex flex-col w-full h-full bg-white">
      <div className="flex flex-col pb-4 border-b border-grey-250">
        <SnapFolderHeader onClose={onClose}/>
        <SnapFolderInfo />
      </div>
      <div className="flex flex-col px-5 pt-4 gap-4">
        <FilterBar filters={filters} onFilterOpen={() => setFilterOpen(true)} />
        <PhotoGrid images={testImages} />
      </div>

      {filterOpen && (
        <OverlayModal isOpen={filterOpen} onClose={() => setFilterOpen(false)} position="bottom">
          <FilterBottomSheet filters={filters} setFilters={setFilters} onClose={() => setFilterOpen(false)} />
        </OverlayModal>
      )}
    </div>
  );
}

export default SnapFolderModal;
