import Link from 'next/link';

const LandingSection = () => {
  return (
    <main className="flex flex-col justify-between bg-grey-1000 w-full h-screen p-6">
      {/* 상단 콘텐츠 */}
      <div className="flex flex-col pt-32 gap-6 items-center">
        <p className="text-5xl font-semibold text-white">
          SNAP
          <br />
          SPLIT
        </p>
        <div className="flex flex-col items-center text-label-2 text-white">
          <p>함께 찍고, 함께 나눠요!</p>
          <p>Snap the memories, Split the costs</p>
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <Link href="/home" className="w-full bg-grey-450 flex justify-center p-4 rounded-2xl">
        시작하기
      </Link>
    </main>
  );
};

export default LandingSection;
