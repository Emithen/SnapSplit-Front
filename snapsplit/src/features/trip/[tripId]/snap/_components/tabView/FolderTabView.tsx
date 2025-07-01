'use client';

import { useRouter, useParams } from 'next/navigation';
import FolderThumbnailPreview from './FolderThumbnailPreview';
import { useState } from 'react';
import FullScreenModal from '@/shared/components/modal/FullScreenModal';
import SnapFolderModal from '@/features/trip/[tripId]/snap/_components/snapFolderModal/SnapFolderModal';

const folders = [
  { name: '유빈', id: 'yubin' },
  { name: '지수', id: 'jisu' },
  { name: '나경', id: 'nagyeong' },
  { name: '연수', id: 'yeonsu' },
];

export default function FolderTabView() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-5 pt-6 pb-24">
        <div className="grid grid-cols-2 gap-x-2 gap-y-5">
      {folders.map(folder => (
        <div
          key={folder.id}
          onClick={() => setIsOpen(true)}
        >
          {/* 썸네일 */}
          <FolderThumbnailPreview />
          {/* 폴더 이름 */}
          <div className="flex justify-center items-center pt-2 h-8 text-body-1">{folder.name}</div>
        </div>
      ))}
      </div>
      {isOpen && (
        <FullScreenModal>
          <SnapFolderModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </FullScreenModal>
      )}
    </div>
  );
}
