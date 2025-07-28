'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import landing_logo from '@public/svg/landing-logo.svg';

const LandingSection = () => {
  const [showKakao, setShowKakao] = useState(false);

  return (
    <main className="flex flex-col justify-between w-full h-screen p-6 bg-white">
      {/* 상단 콘텐츠 */}
      <div className="flex flex-col pt-44 gap-5 items-center">
        <Image src={landing_logo} alt="SnapSplit" />
        <label className="text-label-2 text-primary justify-center">즐거움은 나누고, 정산은 쉽게!</label>
      </div>

      {/* 하단 고정 버튼 */}
      <AnimatePresence mode="wait">
        {!showKakao ? (
          <motion.button
            key="start"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full bg-primary flex justify-center p-4 rounded-2xl text-white cursor-pointer"
            onClick={() => setShowKakao(true)}
          >
            시작하기
          </motion.button>
        ) : (
          <Link href="/home" key="kakao">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full bg-yellow-300 flex justify-center p-3 rounded-2xl text-black cursor-pointer"
            >
              카카오 로그인
            </motion.div>
          </Link>
        )}
      </AnimatePresence>
    </main>
  );
};

export default LandingSection;
