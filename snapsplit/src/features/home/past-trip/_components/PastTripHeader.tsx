import Link from 'next/link';
import Image from 'next/image';
import big_left_arrow from '@public/svg/big-left-arrow.svg';

const PastTripHeader = () => {
  return (
    <header className="py-3">
      <Link href={'/home'}>
        <Image src={big_left_arrow} alt="back" />
      </Link>
    </header>
  );
};

export default PastTripHeader;
