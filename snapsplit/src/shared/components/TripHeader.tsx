'use client';

import Link from 'next/link';
import Image from 'next/image';
import exit from '@public/svg/exit.svg';
import myPage from '@public/svg/my-page.svg';
import plus3Black from '@public/svg/plus-3-black.svg';
import { useState } from 'react';
import OverlayModal from '@/shared/components/modal/OverlayModal';
import AddMemberModal from '../../features/trip/[tripId]/budget/_components/modal/addMemberModal';

const TripHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="px-5 py-3 flex justify-between">
        <Link href="/home">
          <Image src={exit} alt="exit" aria-label="홈으로" />
        </Link>

        <div className="flex flex-row space-x-3 items-center justify-center">
          <button
            className="flex flex-row rounded-[20px] border-1 p-[2px] pr-2 cursor-pointer text-sm items-center justify-center"
            onClick={() => setIsModalOpen(true)}
          >
            <Image src={plus3Black} alt="동행추가" />
            동행
          </button>
          <Link href="/my">
            <Image src={myPage} alt="my-page" aria-label="마이페이지로" className="cursor-pointer" />
          </Link>
        </div>
      </header>

      {/* 동행 추가 모달 */}
      <OverlayModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} position="bottom">
        <AddMemberModal onClose={() => setIsModalOpen(false)} />
      </OverlayModal>
    </>
  );
};

export default TripHeader;
