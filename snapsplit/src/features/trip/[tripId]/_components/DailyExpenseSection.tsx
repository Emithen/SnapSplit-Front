import { Expense } from '../api';
import ExpenseDateBar from './ExpenseDateBar';
import ExpenseItem from './ExpenseItem';
import AddExpenseButton from './AddExpenseButton';

type DailyExpenseSectionProps = {
  label: string; // '여행준비' or '4.7/월'
  expenses: Expense[];
};

const DailyExpenseSection = ({ label, expenses }: DailyExpenseSectionProps) => {
  return (
    <div className="space-y-3">
      <ExpenseDateBar expenseDay={label} />
      {expenses.map((expense) => (
        <ExpenseItem key={expense.expenseId} expense={expense} />
      ))}
      <AddExpenseButton />
    </div>
  );
};

export default DailyExpenseSection;
