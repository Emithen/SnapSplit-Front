'use client';

import ExpenseAmount from './_components/ExpenseAmount';
import ExpenseDetailHeader from './_components/ExpenseDetailHeader';
import ExpenseDetailInfoItem from './_components/ExpenseDetailInfoItem';
import PersonalExpenseItem from './_components/PersonalExpenseItem';
import { ExpenseDetailPageProps } from './type';

export default function ExpenseDetailPage({ tripId }: ExpenseDetailPageProps) {
  console.log('- tripId: ' + tripId);

  const infoItems = [
    { label: '여행 일자', value: 'Day 1' },
    { label: '지출 형태', value: '카드' },
    { label: '지출명', value: '항공권' },
    { label: '지출 내용 (선택)', value: '스카이스캐너' },
    { label: '카테고리 (선택)', value: '항공' },
  ];

  return (
    <div className="h-screen w-full flex flex-col">
      <ExpenseDetailHeader />
      <div className="flex h-full flex-col w-full overflow-y-auto scrollbar-hide p-5">
        <ExpenseAmount amount={500} currency={'USD'} krwAmount={42052000} />
        <div className="pt-6 space-y-6">
          {infoItems.map((item) => (
            <ExpenseDetailInfoItem key={item.label} label={item.label} value={item.value} />
          ))}

          <PersonalExpenseItem type="payer" people={[{ name: '홍길동', amount: '60€' }]} sharedAmount="440€" />
          <PersonalExpenseItem
            type="settlement"
            people={[
              { name: '홍길동', amount: '20€' },
              { name: '김철수', amount: '20€' },
              { name: '이영희', amount: '20€' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
