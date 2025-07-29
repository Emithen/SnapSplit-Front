import SettlementPage from '@trip/[tripId]/split/[settlementId]/SettlementPage';

export default async function Settlement({ params }: { params: Promise<{ tripId: string; settlementId: string }> }) {
  const { tripId, settlementId } = await params;

  return <SettlementPage settlementId={settlementId} tripId={tripId} />;
}
