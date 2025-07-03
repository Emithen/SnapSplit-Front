import { Expense } from "./api";

export type BudgetPageProps = {
  tripId: string;
};

// TripInfo.tsx
export type TripInfoProps = {
    tripName: string;
    countries: {
      countryId: number;
      countryName: string;
    }[];
    startDate: string;
    endDate: string;
};
  
// SharedBudgetBar.tsx
export type SharedCurrency = {
    totalSharedCurrency: string;
    totalSharedAmount: number;
  };
  
export type SharedBudgetBarProps = {
    totalShared: SharedCurrency[];
  };

// TripDateFilterBarProps.tsx
export type TripDateFilterBarProps = {
  startDate: string;
  endDate: string;
};

// DailyExpenseList.tsx
export type ExpenseItemProps = {
  expense: Expense;
  expenseDay: string;
};


export type DailyExpenseListProps = {
  expenses: Expense[];
};
