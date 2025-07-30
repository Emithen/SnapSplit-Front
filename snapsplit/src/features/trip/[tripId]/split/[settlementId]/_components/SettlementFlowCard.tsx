import { SettlementFlowCardProps } from '../type';

export default function SettlementFlowCard({ label, className, settlementDetails }: SettlementFlowCardProps) {
  return (
    <div className={`flex w-full flex-col bg-white rounded-xl p-4 gap-2 ${className}`}>
      <h3 className="text-body-2 text-grey-550">{label}</h3>
      {settlementDetails && settlementDetails.length > 0 ? (
        settlementDetails.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center text-body-1">
            <span>{label === '보낼 돈' ? `${item.receiver.name}` : `${item.sender.name}`}</span>
            <span>{item.amount.toLocaleString()}원</span>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

// export default function SettlementFlowCard({ label, className, settlementDetails }: SettlementFlowCardProps) {
//   return (
//     <div className={`flex w-full flex-col bg-white rounded-xl p-4 gap-2 ${className}`}>
//       <label className="text-body-2 text-grey-550">{label}</label>
//       <div className="flex justify-between items-center text-body-1">
//         <p>이름에게</p>
//         <p>15,800원</p>
//       </div>
//     </div>
//   );
// }
