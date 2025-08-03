import { expenseMember } from '../type';

interface PersonalExpenseItemProps {
  type: 'payer' | 'settlement';
  member: expenseMember[];
}

export default function PersonalExpenseItem({ type, member }: PersonalExpenseItemProps) {
  const isPayer = type === 'payer';

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-body-2 text-grey-550">
        <span>{isPayer ? '결제자' : '정산포함'}</span>
        <span>{isPayer ? '결제금액' : '부담금액'}</span>
      </div>

      {member.map((member) => (
        <div key={member.memberId} className="flex justify-between items-center text-body-1">
          <span>{member.name}</span>
          <span>{member.amount}</span>
        </div>
      ))}
    </div>
  );
}
