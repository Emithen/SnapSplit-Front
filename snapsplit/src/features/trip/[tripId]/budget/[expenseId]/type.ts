export interface PersonItem {
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
  payers: PersonItem[];
  splitters: PersonItem[];
}

export interface ExpenseDetailPageProps {
  tripId: string;
}


export interface ExpenseAmountProps {
  amount: number;
  currency: string;
  amountKRW: number;
}