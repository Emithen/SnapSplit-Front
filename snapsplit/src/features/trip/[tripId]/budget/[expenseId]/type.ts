export interface ExpenseDetailPageProps {
    tripId: string;
}

export default interface ExpenseAmountProps {
  amount: number;
  currency: string;
  exchangeRate?: number;
  krwAmount?: number;
}