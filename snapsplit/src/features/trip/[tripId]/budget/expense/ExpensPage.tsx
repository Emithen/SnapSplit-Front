import ExpenseForm from "@/features/trip/[tripId]/budget/expense/_components/ExpenseForm";

const postExpense = (formData: FormData) => {
  // TODO: API 호출
  console.log(formData);
}

const ExpensePage = () => {

  return (
    <ExpenseForm onSubmit={postExpense} />
  );
};

export default ExpensePage;