import Image from 'next/image';
import check from '@public/svg/check_grey.svg';
import BottomSheet from '@/shared/components/bottom-sheet/BottomSheet';

type CurrencyListProps = {
  onClose: () => void;
  setCurrency: (currency: string) => void;
};

// TODO: 테스트 데이터
const currencyList = ['한국 - KRW', '미국 - USD', '유럽 - EUR', '일본 - JPY'];

const CurrencyList = ({ onClose, setCurrency }: CurrencyListProps) => {
  return (
    <BottomSheet isOpen={true} onClose={onClose}>
      <div className="flex flex-col w-full">
        {currencyList.map((currency) => (
          <button key={currency} onClick={() => setCurrency(currency)} className="flex items-center py-3">
            <Image alt="check" src={check} width={24} height={24} />
            <div className="pl-1 text-body-1">{currency}</div>
          </button>
        ))}
      </div>
    </BottomSheet>
  );
};

export default CurrencyList;
