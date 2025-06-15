import BottomNavBar from './_components/BottomNavBar';
import TripInfo from './_components/TripInfo';
import DailyExpenseList from './_components/DailyExpenseList';
import ExpenseFilter from './_components/ExpenseFilter';
import SharedBudgetBar from './_components/SharedBudgetBar';
import TotalExpenseBottomSheet from './_components/TotalExpenseBottomSheet';
import TripDateFilterBar from './_components/TripDateFilterBar';
import TripHeader from './_components/TripHeader';

export default async function TripPage({ params }: { params: { tripId: number } }) {
  const tripId = params.tripId;

  // 테스트 데이터
  const countries = [
    { countryId: 1, countryName: '런던' },
    { countryId: 2, countryName: '파리' },
    { countryId: 3, countryName: '취리히' },
  ];

  const totalShared = [
    {
      totalSharedCurrency: 'KRW',
      totalSharedAmount: 300000,
    },
    {
      totalSharedCurrency: 'USD',
      totalSharedAmount: 120.5,
    },
  ];

  const expenses = [
    {
      expenseId: 1,
      expenseDate: '2025-04-01',
      expenseAmount: 150000,
      expenseCurrency: 'KRW',
      expenseUsers: [
        { userId: 11, userName: '문재영' },
        { userId: 12, userName: '권은정' },
      ],
      expenseCategory: '식비',
    },
    {
      expenseId: 5,
      expenseDate: '2025-04-07',
      expenseAmount: 1000,
      expenseCurrency: 'KRW',
      expenseUsers: [{ userId: 11, userName: '문재영' }],
      expenseCategory: '식비',
    },
    {
      expenseId: 2,
      expenseDate: '2025-04-07',
      expenseAmount: 2000,
      expenseCurrency: 'KRW',
      expenseUsers: [{ userId: 11, userName: '권은정' }],
      expenseCategory: '식비',
    },
    {
      expenseId: 3,
      expenseDate: '2025-04-8',
      expenseAmount: 100,
      expenseCurrency: 'USD',
      expenseUsers: [{ userId: 13, userName: '박지수' }],
      expenseCategory: '숙박',
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-grey-350">
        <TripHeader />
        <TripInfo
          tripName={'유luv여행'}
          countries={countries}
          memberCount={4}
          startDate={'2025.4.7'}
          endDate={'4.12'}
        />
        <SharedBudgetBar totalShared={totalShared} />
        <TripDateFilterBar startDate={'2025-4-7'} endDate={'2025-4-16'} />
      </div>

      {/* 지출 리스트: 가능한 영역만 차지 + 스크롤 */}
      <ExpenseFilter />
      <div className="flex-grow overflow-y-auto scrollbar-hide">
        <DailyExpenseList expenses={expenses} tripStartDate="2025-04-07" tripEndDate="2025-04-16" />
      </div>

      {/* 고정 바텀 시트 */}
      <TotalExpenseBottomSheet />

      {/* 고정 네비게이션 바 */}
      <BottomNavBar />
    </div>
  );
}
