type ExpenseDateBarProps = {
  expenseDay: string;
};

const ExpenseDateBar = ({ expenseDay }: ExpenseDateBarProps) => {
  return <p className="text-body-1">{expenseDay}</p>;
};

export default ExpenseDateBar;
