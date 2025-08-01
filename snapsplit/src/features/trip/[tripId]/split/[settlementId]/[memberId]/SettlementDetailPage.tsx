import SettlementDetailHeader from './_components/SettlementDetailHeader';
import TotalAmountInfo from './_components/TotalAmountInfo';
import { SettlementDetailPageProps } from './type';
import mock from '@public/mocks/split-settlement-detail.json';

const SettlementDetailPage = ({ tripId, settlementId, name }: SettlementDetailPageProps) => {
  return (
    <div className="h-screen w-full flex flex-col bg-light_grey overflow-y-auto scrollbar-hide">
      <SettlementDetailHeader tripId={tripId} settlementId={settlementId} />
      <TotalAmountInfo name={name} totalAmount={mock.totalAmount} />
    </div>
  );
};
export default SettlementDetailPage;
