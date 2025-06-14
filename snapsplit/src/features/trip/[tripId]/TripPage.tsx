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

  return (
    <div className="h-screen">
      <TripHeader />
      <TripInfo tripName={'유luv여행'} countries={[]} memberCount={4} startDate={'2025.4.7'} endDate={'4.12'} />
      <SharedBudgetBar />
      <TripDateFilterBar />
      <ExpenseFilter />
      <DailyExpenseList />
      <TotalExpenseBottomSheet />
      <BottomNavBar />
    </div>
  );
}
