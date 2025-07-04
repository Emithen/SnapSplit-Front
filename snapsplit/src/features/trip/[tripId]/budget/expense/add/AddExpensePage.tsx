'use client';

import ExpenseForm from "@/features/trip/[tripId]/budget/expense/_components/ExpenseForm";

const postExpense = (formData: FormData) => {
  // TODO: API 호출
  console.log(formData);
}

const AddExpenseModal = () => {

  return (
    <ExpenseForm mode="add" onSubmit={postExpense} />
  );
};

export default AddExpenseModal;
