import { Expense } from '../api';
import { groupExpensesByDate } from '@/shared/utils/groupExpenses';
import DailyExpenseSection from './DailyExpenseSection';

type DailyExpenseListProps = {
  expenses: Expense[];
  tripStartDate: string;
  tripEndDate: string;
};

const DailyExpenseList = ({ expenses, tripStartDate, tripEndDate }: DailyExpenseListProps) => {
  const groupedExpenses = groupExpensesByDate(expenses, tripStartDate, tripEndDate);

  console.log('groupedExpenses:', groupedExpenses);

  return (
    <div className="w-full space-y-6 px-5 text-grey-850 pb-6">
      {groupedExpenses.map((group) => (
        <DailyExpenseSection key={group.label} label={group.label} expenses={group.expenses} />
      ))}
    </div>
  );
};

export default DailyExpenseList;
