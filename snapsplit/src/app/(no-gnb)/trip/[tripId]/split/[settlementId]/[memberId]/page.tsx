import SettlementDetailPage from '@trip/[tripId]/split/[settlementId]/[memberId]/SettlementDetailPage';

// 이름도 같이 받아와서 쓰던가 해야될듯.

export default async function Settlement({ params }: { params: Promise<{ tripId: string; memberId: string }> }) {
  const { tripId, memberId } = await params;

  return <SettlementDetailPage memberId={memberId} tripId={tripId} />;
}
