// import { ExpenseDetailPageProps } from './type';

// const ExpenseDetailPage = ({ tripId }: ExpenseDetailPageProps) => {
//   console.log('- tripId: ' + tripId);

//   return <div className="h-screen flex flex-col">dsdds</div>;
// };

// export default ExpenseDetailPage;

'use client';

import ExpenseAmount from './_components/ExpenseAmount';
import ExpenseDetailHeader from './_components/ExpenseDetailHeader';
import { ExpenseDetailPageProps } from './type';

export default function ExpenseDetailPage({ tripId }: ExpenseDetailPageProps) {
  console.log('- tripId: ' + tripId);

  return (
    <div className="h-screen w-full flex flex-col">
      <ExpenseDetailHeader />
      <div className="flex h-full flex-col w-full overflow-y-auto scrollbar-hide p-5">
        <ExpenseAmount />

        {/* Detail Fields */}
        <div className="pt-6 space-y-6">
          {[
            { label: '여행 일자', value: 'Day 1' },
            { label: '지출 형태', value: '카드' },
            { label: '지출명', value: '항공권' },
            { label: '지출 내용 (선택)', value: '스카이스캐너' },
            { label: '카테고리 (선택)', value: '항공' },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center text-body-2">
              <span className="text-grey-550">{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
          {/* Payers and Settlement */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-body-2">
              <span className="text-grey-550">결제자</span>
              <span className=" text-grey-550">결제금액</span>
            </div>
            <div className="flex justify-between items-center text-body-1">
              <span>공동경비</span>
              <span>440€</span>
            </div>
            <div className="flex justify-between items-center text-body-1">
              <span>홍길동</span>
              <span>60€</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-body-2 text-grey-550">
              <span>정산포함</span>
              <span>부담금액</span>
            </div>
            {['홍길동', '김철수', '이영희'].map((name, idx) => (
              <div key={idx} className="flex justify-between items-center text-body-1">
                <span>{name}</span>
                <span>20€</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
