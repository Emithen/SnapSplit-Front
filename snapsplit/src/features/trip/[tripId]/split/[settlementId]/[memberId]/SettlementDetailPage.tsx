import { SettlementDetailPageProps } from './type';

const SettlementDetailPage = ({ tripId, memberId }: SettlementDetailPageProps) => {
  return (
    <div>
      {tripId}, {memberId}
    </div>
  );
};
export default SettlementDetailPage;
