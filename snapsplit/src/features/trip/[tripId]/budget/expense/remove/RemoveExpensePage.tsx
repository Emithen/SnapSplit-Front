'use client';

import ExpenseForm from "@/features/trip/[tripId]/budget/expense/_components/ExpenseForm";

const postExpense = (formData: FormData) => {
  // TODO: API 호출
  console.log(formData);
}

const RemoveExpensePage = () => {

  return (
    <ExpenseForm mode="remove" onSubmit={postExpense} />
  );
};

export default RemoveExpensePage;
