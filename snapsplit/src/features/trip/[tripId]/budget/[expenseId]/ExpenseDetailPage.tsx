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
      <div className="flex flex-col w-full overflow-y-auto scrollbar-hide p-5">
        <ExpenseAmount />

        {/* Detail Fields */}
        <div className="mx-5 bg-light_grey rounded-xl space-y-3">
          {[
            { label: '여행 일자', value: 'Day 1' },
            { label: '지출 형태', value: '카드' },
            { label: '지출명', value: '항공권' },
            { label: '지출 내용 (선택)', value: '스카이스캐너' },
            { label: '카테고리 (선택)', value: '항공' },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center">
              <span className="text-body-2 text-grey-850">{item.label}</span>
              <span className="text-body-2">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Payers and Settlement */}
        <div className="mx-5 bg-white rounded-xl mt-3 space-y-3">
          {/* Payers */}
          <div className="flex justify-between items-center">
            <span className="text-body-2 text-grey-850">결제자</span>
            <span className="text-body-2 text-grey-850">결제금액</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-body-1">공동경비</span>
            <span className="text-body-1">440€</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-body-1">홍길동</span>
            <span className="text-body-1">60€</span>
          </div>

          {/* Divider */}
          <div className="border-t border-grey-200 pt-3 flex justify-between items-center">
            <span className="text-body-2 text-grey-850">정산포함</span>
            <span className="text-body-2 text-grey-850">부담금액</span>
          </div>

          {/* Burdens */}
          {['홍길동', '김철수', '이영희'].map((name, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="text-body-1">{name}</span>
              <span className="text-body-1">20€</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
