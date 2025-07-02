import mainLogo from '@public/svg/logo_main.svg';
import homeMenu from '@public/svg/homeMenu.svg';
import Image from 'next/image';

const HomeHeader = () => {
  return (
    <header className="flex items-center justify-between w-full bg-white py-3 px-5">
      <Image src={mainLogo} alt="mainLogo" />
      <Image src={homeMenu} alt="menu" />
    </header>
  );
};

export default HomeHeader;
