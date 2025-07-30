import { SettlementDetailPageProps } from './type';

const SettlementDetailPage = ({ tripId, memberId }: SettlementDetailPageProps) => {
  console.log('- tripId : ' + tripId);
  console.log('- memberId : ' + memberId);

  return (
    <div>
      {tripId}, {memberId}
    </div>
  );
};
export default SettlementDetailPage;
