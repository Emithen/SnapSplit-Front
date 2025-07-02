import mainLogo from '@public/svg/logo_main.svg';
import myPage from '@public/svg/my-page.svg';
import Image from 'next/image';

const HomeHeader = () => {
  return (
    <header className="flex items-center justify-between w-full bg-white py-3 px-5">
      <Image src={mainLogo} alt="mainLogo" className="cursor-pointer" />
      <Image src={myPage} alt="myPage" className="cursor-pointer" />
    </header>
  );
};

export default HomeHeader;
