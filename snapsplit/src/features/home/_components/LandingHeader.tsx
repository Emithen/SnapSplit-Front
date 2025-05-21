import mainLogo from '@public/svg/mainLogo.svg';
import landingMenu from '@public/svg/landingMenu.svg';
import Image from 'next/image';

const LandingHeader = () => {
  return (
    <header className="flex items-center justify-between w-full bg-white py-3 px-5">
      <Image src={mainLogo} alt="mainLogo" />
      <Image src={landingMenu} alt="menu" />
    </header>
  );
};

export default LandingHeader;
