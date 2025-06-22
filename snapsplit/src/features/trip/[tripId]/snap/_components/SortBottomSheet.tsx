'use client';

import Image from 'next/image';

interface SortBottomSheetProps {
  selectedSort: string;
  onSelectSort: (option: string) => void;
  onClose: () => void;
}

// 테스트 데이터
const sortOptions = ['최신순', '이름순', '좋아요순'];

export default function SortBottomSheet({
  selectedSort,
  onSelectSort,
  onClose,
}: SortBottomSheetProps) {
  return (
    <div className="fixed bottom-0 w-full bg-white rounded-t-2xl pt-5 px-5 pb-9 z-modal">
      <div className="text-title-1">정렬</div>
      <ul className="space-y-4 pt-5">
        {sortOptions.map(option => (
          <button
            key={option}
            onClick={() => {
              onSelectSort(option);
              onClose();
            }}
            className="flex items-center cursor-pointer"
          >
            <span>
              {selectedSort === option ? (
                <Image
                  src="/svg/check_black.svg"
                  alt="check"
                  width={24}
                  height={24}
                  unoptimized
                />
              ) : (
                <Image
                  src="/svg/check_grey.svg"
                  alt="check"
                  width={24}
                  height={24}
                  unoptimized
                />
              )}
            </span>
            <span className="text-body-2 pl-0.5">
              {option}
            </span>
          </button>
        ))}
      </ul>
    </div>
  );
}
