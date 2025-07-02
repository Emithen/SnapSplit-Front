import Link from 'next/link';
import Image from 'next/image';
import landing_logo from '@public/svg/landing-logo.svg';

const LandingSection = () => {
  return (
    <main className="flex flex-col justify-between w-full h-screen p-6 bg-gradient-to-br from-[#B9F5E2] via-white to-[#DDF9F7]">
      {/* 상단 콘텐츠 */}
      <div className="flex flex-col pt-44 gap-5 items-center">
        <Image src={landing_logo} alt="SnapSplit" />
        <div className="flex flex-col items-center text-[16px] font-light text-primary justify-center">
          <p className="flex items-center justify-center">Snap the memories,</p>
          <p className="flex items-center justify-center">Split the costs</p>
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <Link href="/home" className="w-full bg-primary flex justify-center p-4 rounded-2xl text-white">
        시작하기
      </Link>
    </main>
  );
};

export default LandingSection;
