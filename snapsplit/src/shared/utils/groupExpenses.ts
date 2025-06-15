import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { Expense } from '@/features/trip/[tripId]/api';

dayjs.extend(isSameOrBefore); // ✅ 꼭 필요!!

type GroupedExpenses = {
  label: string;
  date: string | null;
  expenses: Expense[];
};

export function groupExpensesByDate(
  expenses: Expense[],
  tripStartDate: string,
  tripEndDate: string
): GroupedExpenses[] {
  const grouped: Record<string, Expense[]> = {};

  for (const expense of expenses) {
    if (dayjs(expense.expenseDate).isBefore(dayjs(tripStartDate))) {
      grouped['PRE_TRIP'] = [...(grouped['PRE_TRIP'] ?? []), expense];
    }
  }

  const result: GroupedExpenses[] = [];
  let current = dayjs(tripStartDate);
  const end = dayjs(tripEndDate);

  while (current.isSameOrBefore(end)) {
    const dateKey = current.format('YYYY-MM-DD');
    const label = current.format('M.D(dd)');

    const dayExpenses = expenses.filter(
      (e) => dayjs(e.expenseDate).isSame(dateKey, 'day')
    );

    result.push({
      label,
      date: dateKey,
      expenses: dayExpenses,
    });

    current = current.add(1, 'day');
  }

  if (grouped['PRE_TRIP']) {
    result.unshift({
      label: '여행준비',
      date: null,
      expenses: grouped['PRE_TRIP'],
    });
  }

  return result;
}
