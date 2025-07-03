'use client';

import ExpenseForm from "@/features/trip/[tripId]/budget/expense/ExpenseForm";

const postExpense = () => {
  // TODO: API 호출
}

const AddExpenseModal = () => {

  return (
    <ExpenseForm mode="add" onSubmit={postExpense} />
  );
};

export default AddExpenseModal;
