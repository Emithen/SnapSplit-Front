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
        <SharedBudgetBar />
        <TripDateFilterBar />
        <ExpenseFilter />
      </div>

      {/* 지출 리스트: 가능한 영역만 차지 + 스크롤 */}
      <div className="flex-grow overflow-y-auto">
        <DailyExpenseList />
      </div>

      {/* 고정 바텀 시트 */}
      <TotalExpenseBottomSheet />

      {/* 고정 네비게이션 바 */}
      <BottomNavBar />
    </div>
  );
}
