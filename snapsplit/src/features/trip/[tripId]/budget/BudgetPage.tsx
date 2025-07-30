import TripInfo from './_components/TripInfo';
import DailyExpenseList from './_components/DailyExpenseList';
import SharedBudgetBar from './_components/SharedBudgetBar';
import TripDateBar from './_components/TripDateBar';
import BottomSheetTrigger from './_components/modal/BottomSheetTrigger';
import TripHeader from '@/shared/components/TripHeader';
import { BudgetPageProps } from './type';

// 목데이터
import tripDetailMock from '@public/mocks/budget-mock.json';

const BudgetPage = ({ tripId }: BudgetPageProps) => {
  console.log('- tripId: ' + tripId);
  const { trip, totalShared, expenses } = tripDetailMock.data;

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white">
        <TripHeader tripId={tripId} />
        <TripInfo
          tripName={trip.tripName}
          countries={trip.countries}
          startDate={trip.startDate}
          endDate={trip.endDate}
        />
        <SharedBudgetBar totalShared={totalShared} tripId={trip.tripId} />
        <TripDateBar startDate={trip.startDate} endDate={trip.endDate} />
      </div>
      <DailyExpenseList expenses={expenses} tripStartDate={trip.startDate} tripEndDate={trip.endDate} />
      <BottomSheetTrigger total={trip.tripTotalExpense} />
    </div>
  );
};

export default BudgetPage;
