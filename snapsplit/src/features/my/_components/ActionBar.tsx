'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// TODO: 전역 상태로 tripId 기본값 공유
// -> router.back() 보다 tripId 기본값 기반 라우팅으로 브라우저 히스토리 안정성 확보

export default function ActionBar() {
  const router = useRouter();
  return (
    <div className="flex items-center w-full px-5 py-3">
      <button
        onClick={() => {
          router.back();
        }}
        className="ml-auto"
      >
        <Image src="/svg/exit-grey-1000.svg" alt="exit" aria-label="홈으로" width={24} height={24} />
      </button>
    </div>
  );
}
