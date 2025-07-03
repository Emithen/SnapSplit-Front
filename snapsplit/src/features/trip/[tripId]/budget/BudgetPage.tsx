'use client';

import TripInfo from './_components/TripInfo';
import DailyExpenseList from './_components/DailyExpenseList';
import ExpenseFilter from './_components/ExpenseFilter';
import SharedBudgetBar from './_components/SharedBudgetBar';
import TripDateBar from './_components/TripDateBar';
import TripHeader from './_components/TripHeader';
import BottomSheetTrigger from './_components/modal/BottomSheetTrigger';
import { BudgetPageProps } from './type';

// 목데이터
import { countries, totalShared, expenses } from '@public/mocks/budget-mock';

const BudgetPage = ({ tripId }: BudgetPageProps) => {
  console.log(tripId);

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
        <TripDateBar startDate="2025-04-07" endDate="2025-04-16" />
      </div>
      <ExpenseFilter />
      <DailyExpenseList expenses={expenses} tripStartDate="2025-04-07" tripEndDate="2025-04-16" />
      <BottomSheetTrigger total={1355200} />
    </div>
  );
};

export default BudgetPage;
