import Image from 'next/image';
import arrow from '@public/svg/arrow-top-white.svg';

const TopFloatingButton = () => {
  return (
    <div className="fixed w-full min-w-[360px] max-w-[415px] lg:max-w-[360px] mx-auto z-floating bottom-[162px] right-5 flex justify-center">
      <button className="rounded-full bg-primary p-2 flex items-center justify-center">
        <Image alt="scrollTop" src={arrow} />
      </button>
    </div>
  );
};

export default TopFloatingButton;
