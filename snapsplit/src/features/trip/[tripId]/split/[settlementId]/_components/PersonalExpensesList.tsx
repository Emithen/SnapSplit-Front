import Devider from '@/shared/components/Devider';
import Image from 'next/image';
import arrow from '@public/svg/arrow-right-grey-550.svg';

export type Expense = {
  memberId?: number;
  name?: string;
  amount?: number;
  memberType?: string;
};

export interface PersonalExpensesListProps {
  expenses: Expense[];
  totalAmount: number;
}

export interface PersonalExpensesItemProps {
  expense: Expense;
}

const PersonalExpensesItem = ({ expense }: PersonalExpensesItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <label>{expense.name}</label>
      <div className="flex items-center">
        <p>{expense.amount?.toLocaleString()}원</p>
        <Image src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default function PersonalExpensesList({ expenses = [], totalAmount = 0 }: PersonalExpensesListProps) {
  return (
    <>
      <h2 className="text-label-1">개별 지출 금액</h2>
      <div className="flex flex-col gap-3 w-full bg-white p-4 rounded-xl">
        {expenses.map((expense, idx) => (
          <PersonalExpensesItem key={idx} expense={expense} />
        ))}

        <Devider p="py-[0.5px]" className="my-1" />

        <div className="flex justify-between items-center">
          <label>총 지출 합계</label>
          <div className="flex items-center">
            <p>{totalAmount.toLocaleString()}원</p>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}
