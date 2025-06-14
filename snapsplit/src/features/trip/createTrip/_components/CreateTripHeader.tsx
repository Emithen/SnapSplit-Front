import Link from 'next/link';
import Image from 'next/image';
import LeftArrow from '@public/svg/leftArrow.svg';

type CreateTripHeaderProps = {
  step: number;
  onPrev: () => void;
};

const CreateTripHeader = ({ step, onPrev }: CreateTripHeaderProps) => {
  return (
    <header className="px-5 py-3">
      {step <= 1 ? (
        <Link href="/home">
          <Image src={LeftArrow} alt="back" aria-label="홈으로" />
        </Link>
      ) : (
        <button onClick={onPrev} aria-label="이전 단계로 이동">
          <Image src={LeftArrow} alt="back" />
        </button>
      )}
    </header>
  );
};

export default CreateTripHeader;
