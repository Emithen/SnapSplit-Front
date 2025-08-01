interface Person {
  name: string;
  amount: string;
}

interface PersonalExpenseItemProps {
  type: 'payer' | 'settlement';
  people: Person[];
  sharedAmount?: string; // type이 'payer'일 때만 사용
}

export default function PersonalExpenseItem({ type, people, sharedAmount }: PersonalExpenseItemProps) {
  const isPayer = type === 'payer';

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-body-2 text-grey-550">
        <span>{isPayer ? '결제자' : '정산포함'}</span>
        <span>{isPayer ? '결제금액' : '부담금액'}</span>
      </div>

      {isPayer && sharedAmount && (
        <div className="flex justify-between items-center text-body-1">
          <span>공동경비</span>
          <span>{sharedAmount}</span>
        </div>
      )}

      {people.map((person) => (
        <div key={person.name} className="flex justify-between items-center text-body-1">
          <span>{person.name}</span>
          <span>{person.amount}</span>
        </div>
      ))}
    </div>
  );
}
