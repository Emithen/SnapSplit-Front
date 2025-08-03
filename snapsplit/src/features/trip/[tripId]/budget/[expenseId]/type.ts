export interface expenseMember {
  memberId: number;
  name: string;
  amount: number;
}

export interface ExpenseDetailData {
  expenseId: number;
  amount: number;
  amountKRW: number;
  currency: string;         // ex: "EUR"
  paymentMethod: string;    // ex: "cash" | "card"
  date: string;
  expenseName: string;
  expenseMemo: string;
  category: string;         // ex: "FOOD"
  payers: expenseMember[];
  splitters: expenseMember[];
}

export interface ExpenseDetailPageProps {
  tripId: string;
}

export interface ExpenseAmountProps {
  amount: number;
  symbol: string;
  amountKRW: number;
}

export interface PersonalExpenseItemProps {
  variant: 'payers' | 'splitters';
  member: expenseMember[];
  symbol: string;
}