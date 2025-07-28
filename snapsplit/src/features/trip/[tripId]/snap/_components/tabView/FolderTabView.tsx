'use client';

import FolderThumbnailPreview from './FolderThumbnailPreview';
import { useParams, useRouter } from 'next/navigation';

const folders = [
  { name: '유빈', id: 'yubin' },
  { name: '지수', id: 'jisu' },
  { name: '나경', id: 'nagyeong' },
  { name: '연수', id: 'yeonsu' },
];

export default function FolderTabView() {
  const router = useRouter();
  const params = useParams();

  const tripId = params.tripId;

  return (
    <div className="px-5 pt-6 pb-24">
      <div className="grid grid-cols-2 gap-x-2 gap-y-5">
        {folders.map((folder) => (
          <div key={folder.id} onClick={() => router.push(`/trip/${tripId}/snap/${folder.id}`)}>
            {/* 썸네일 */}
            <FolderThumbnailPreview />
            {/* 폴더 이름 */}
            <div className="flex justify-center items-center pt-2 h-8 text-body-1">{folder.name}의 사진</div>
          </div>
        ))}
      </div>
    </div>
  );
}
