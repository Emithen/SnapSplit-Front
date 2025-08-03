// ExpenseDetailPage.tsx
'use client';

import ExpenseAmount from './_components/ExpenseAmount';
import ExpenseDetailHeader from './_components/ExpenseDetailHeader';
import ExpenseDetailInfoItem from './_components/ExpenseDetailInfoItem';
import PersonalExpenseItem from './_components/PersonalExpenseItem';
import { useCurrencySymbol } from '@/shared/utils/useCurrencySymbol';
import { ExpenseDetailPageProps } from './type';
import mock from '@public/mocks/expense-detail.json';

export default function ExpenseDetailPage({ tripId }: ExpenseDetailPageProps) {
  // mock 에서 data 객체만 꺼내기
  const { data: expenseDetail } = mock;

  // 필요한 필드만 destructure
  const { amount, amountKRW, currency, paymentMethod, date, expenseName, expenseMemo, category, payers, splitters } =
    expenseDetail;

  // 통화 심볼 (EUR -> €)
  const symbol = useCurrencySymbol(currency);

  // 렌더링용 정보 목록
  const infoItems = [
    { label: '여행 일자', value: date },
    { label: '지출 형태', value: paymentMethod === 'card' ? '카드' : '현금' },
    { label: '지출명', value: expenseName },
    { label: '지출 내용 (선택)', value: expenseMemo || '-' },
    { label: '카테고리 (선택)', value: category || '-' },
  ];

  return (
    <div className="h-screen w-full flex flex-col">
      <ExpenseDetailHeader tripId={tripId} />

      <div className="flex h-full flex-col w-full overflow-y-auto scrollbar-hide p-5">
        {/* 금액 표시 */}
        <ExpenseAmount amount={amount} currency={currency} amountKRW={amountKRW} />

        <div className="pt-6 space-y-6">
          {/* 기본 정보 */}
          {infoItems.map((item) => (
            <ExpenseDetailInfoItem key={item.label} label={item.label} value={item.value} />
          ))}

          {/* 결제자 리스트 */}
          <PersonalExpenseItem
            type="payer"
            people={payers.map((p) => ({
              name: p.name,
              amount: `${p.amount}${symbol}`,
            }))}
          />

          {/* 분담자 리스트 */}
          <PersonalExpenseItem
            type="settlement"
            people={splitters.map((s) => ({
              name: s.name,
              amount: `${s.amount}${symbol}`,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
