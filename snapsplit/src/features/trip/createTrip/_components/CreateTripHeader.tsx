import Link from 'next/link';
import Image from 'next/image';
import LeftArrow from '@public/svg/leftArrow.svg';

const CreateTripHeader = () => {
  return (
    <header className="px-5 py-3">
      <Link href="/home">
        <Image src={LeftArrow} alt="back" />
      </Link>
    </header>
  );
};

export default CreateTripHeader;
