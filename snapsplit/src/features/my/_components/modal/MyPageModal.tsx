'use client';

import Image from 'next/image';

type MyPageModalProps = {
  onClose: () => void;
  mode: 'logOut' | 'withdraw';
};

export default function MyPageModal({ onClose, mode }: MyPageModalProps) {
  return (
    <div className="w-full px-5">
      <div className="flex flex-col items-center w-full gap-2 px-5 py-6 bg-white rounded-xl">
        <div className="flex items-center w-full">
          <button onClick={onClose} className="ml-auto">
            <Image src="/svg/exit-grey.svg" alt="exit" aria-label="닫기" width={24} height={24} />
          </button>
        </div>
        <div className="flex flex-col items-center w-full gap-6">
          <p className="text-title-1 text-grey-1000">{mode === 'logOut' ? '로그아웃 할까요?' : '정말 탈퇴하시겠습니까?'}</p>
          <div className="flex items-center justify-between w-full gap-3">
            <button className="w-full h-13 text-label-1 rounded-xl bg-grey-650 text-white">아니요</button>
            <button className="w-full h-13 text-label-1 rounded-xl bg-green text-white">네</button>
          </div>
        </div>
      </div>
    </div>
  );
}
