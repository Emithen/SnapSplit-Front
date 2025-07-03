import { SharedBudgetBarProps } from '../type';
import { useCurrencySymbol } from '@/shared/utils/useCurrencySymbol';
import rightArrow from '@public/svg/rightArrow.svg';
import Image from 'next/image';
import devider from '@public/svg/devider-2-green.svg';
import Link from 'next/link';

const SharedBudgetBar = ({ totalShared }: SharedBudgetBarProps) => {
  const Currencysymbol = useCurrencySymbol(totalShared[0].totalSharedCurrency);

  return (
    <div className="flex w-full px-5 pb-4">
      <div className="flex w-full bg-gradient-to-br from-primary via-primary/40 to-transparent p-[1px] rounded-xl">
        <div className="flex flex-col w-full items-center rounded-xl bg-bg_green px-5 py-4 text-body-2">
          <div className="w-full flex flex-row justify-between items-center text-green text-sm pb-1">
            <p>공동경비 잔액</p>
            <div className="flex flex-row gap-3">
              <Link href="#">빼기</Link>
              <Image src={devider} alt="devider" />
              <Link href="#">추가하기</Link>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <p className="text-head-0 text-black">
              {Currencysymbol}
              {totalShared[0].totalSharedAmount.toLocaleString()}
            </p>
            <Image alt=">" src={rightArrow} />
          </div>
          <p className="text-body-2 text-grey-550 w-full">어제보다 36유로 덜 썼어요!</p>
        </div>
      </div>
    </div>
  );
};

export default SharedBudgetBar;
