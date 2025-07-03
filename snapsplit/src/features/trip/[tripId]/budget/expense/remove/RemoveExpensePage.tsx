'use client';

import ExpenseForm from "@/features/trip/[tripId]/budget/expense/_components/ExpenseForm";

const postExpense = () => {
  // TODO: API 호출
}

const RemoveExpensePage = () => {

  return (
    <ExpenseForm mode="remove" onSubmit={postExpense} />
  );
};

export default RemoveExpensePage;
