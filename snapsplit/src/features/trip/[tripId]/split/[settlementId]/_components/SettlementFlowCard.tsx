import { SettlementFlowCardProps } from '../type';

export default function SettlementFlowCard({ label, className }: SettlementFlowCardProps) {
  return (
    <div className={`flex w-full flex-col bg-white rounded-xl p-4 gap-2 ${className}`}>
      <label className="text-body-2 text-grey-550">{label}</label>
      <div className="flex justify-between items-center text-body-1">
        <p>이름에게</p>
        <p>15,800원</p>
      </div>
    </div>
  );
}
