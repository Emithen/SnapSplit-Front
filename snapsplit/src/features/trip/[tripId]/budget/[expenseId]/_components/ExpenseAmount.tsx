import ExpenseAmountProps from '../type';
import { useCurrencySymbol } from '@/shared/utils/useCurrencySymbol';

export default function ExpenseAmount({ amount, currency, exchangeRate, krwAmount }: ExpenseAmountProps) {
  const symbol = useCurrencySymbol(currency); // 'USD' -> '$'

  return (
    <div className="px-5 py-4 bg-grey-150 flex flex-col rounded-xl">
      <p className="text-head-1">
        {amount}
        {symbol}
      </p>
      <p className="text-body-2 text-grey-550">= {krwAmount}원</p>
    </div>
  );
}
