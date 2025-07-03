import Image from 'next/image';
import arrow from '@public/svg/arrow-top-white.svg';

const TopFloatingButton = () => {
  return (
    <div className="lg:max-w-[360px] mx-auto fixed left-1/2 -translate-x-1/2 w-full max-w-[415px] min-w-[360px] z-floating bottom-[134px] flex justify-end pr-5">
      <button className="w-11 h-11 p-2 bg-primary rounded-[40px] shadow-[0px_0px_2px_0px_rgba(34,34,34,0.25)] inline-flex justify-center items-center">
        <Image alt="scrollTop" src={arrow} width={20} height={20} />
      </button>
    </div>
  );
};

export default TopFloatingButton;
